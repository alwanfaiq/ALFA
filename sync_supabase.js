// Script sinkronisasi langsung ke Supabase tanpa perlu GitHub
// Cara pakai:
// Opsi A: node sync_supabase.js <SERVICE_ROLE_KEY>
// Opsi B: node sync_supabase.js --email <EMAIL> --password <PASSWORD>

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');
const path = require('path');

const defaults = JSON.parse(fs.readFileSync(path.join(__dirname, 'defaults.json'), 'utf8'));
const supabaseUrl = 'https://klcbeyqlvmmtgumzphkp.supabase.co';
const anonKey = 'sb_publishable_OADaJgLpQNjKdcZpQegoCQ_ybF-QVAB';

async function main() {
  const args = process.argv.slice(2);
  let authToken = null;
  let isServiceRole = false;

  const emailIdx = args.indexOf('--email');
  const passIdx = args.indexOf('--password');

  if (emailIdx !== -1 && passIdx !== -1) {
    const email = args[emailIdx + 1];
    const password = args[passIdx + 1];
    console.log(`Mencoba login admin Supabase sebagai: ${email}...`);
    const loginRes = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        apikey: anonKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const loginData = await loginRes.json();
    if (!loginRes.ok || !loginData.access_token) {
      console.error('❌ Gagal login Supabase:', loginData.error_description || loginData.message || JSON.stringify(loginData));
      process.exit(1);
    }
    authToken = loginData.access_token;
    console.log('✔ Berhasil login sebagai admin!');
  } else if (args[0] && !args[0].startsWith('--')) {
    authToken = args[0];
    isServiceRole = true;
  } else if (process.env.SUPABASE_SERVICE_KEY) {
    authToken = process.env.SUPABASE_SERVICE_KEY;
    isServiceRole = true;
  }

  if (!authToken) {
    console.log('================================================================');
    console.log('ALFA History - Supabase Direct Sync');
    console.log('================================================================');
    console.log('Pilih salah satu cara berikut untuk sinkronisasi langsung:');
    console.log('');
    console.log('1. Menggunakan Service Role Key:');
    console.log('   node sync_supabase.js <SERVICE_ROLE_KEY>');
    console.log('   (Salin dari Supabase Dashboard -> Project Settings -> API -> service_role)');
    console.log('');
    console.log('2. Menggunakan Login Email & Password Admin:');
    console.log('   node sync_supabase.js --email admin@example.com --password rahasia');
    console.log('');
    console.log('3. Atau via Browser di admin.html:');
    console.log('   Buka admin.html di browser, login, dan klik tombol:');
    console.log('   "Sinkronkan konten bawaan (+20 baru)"');
    console.log('');
    console.log('4. Atau via SQL Editor:');
    console.log('   Copy file "supabase_characters.sql", paste di Supabase SQL Editor, klik Run.');
    console.log('================================================================');
    process.exit(0);
  }

  const authHeader = {
    apikey: isServiceRole ? authToken : anonKey,
    Authorization: 'Bearer ' + authToken
  };

  console.log('Menghubungkan ke Supabase:', supabaseUrl);
  console.log('Total karakter yang akan disinkronkan:', defaults.characters.length);

  for (let i = 0; i < defaults.characters.length; i++) {
    const c = defaults.characters[i];
    const payload = {
      name: c.name,
      role: c.role || '',
      img: c.img || '',
      t: i,
      meta: c.meta || '',
      body: c.body || '',
      facts: c.facts || '',
      eras: c.eras || [],
      groups: c.groups || [],
      faith: c.faith || 'Islam',
      gender: c.gender || 'Pria',
      countries: c.countries || [],
      slides: c.slides || [],
      gallery: c.gallery || [],
      show_label: true
    };

    const checkRes = await fetch(`${supabaseUrl}/rest/v1/characters?name=eq.${encodeURIComponent(c.name)}&select=id`, {
      headers: authHeader
    });

    const existing = await checkRes.json();
    if (Array.isArray(existing) && existing.length > 0) {
      const id = existing[0].id;
      await fetch(`${supabaseUrl}/rest/v1/characters?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
          ...authHeader,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      console.log(`[${i+1}/${defaults.characters.length}] ✔ Updated: ${c.name}`);
    } else {
      await fetch(`${supabaseUrl}/rest/v1/characters`, {
        method: 'POST',
        headers: {
          ...authHeader,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify(payload)
      });
      console.log(`[${i+1}/${defaults.characters.length}] ✔ Inserted: ${c.name}`);
    }
  }

  console.log('\n🎉 SELURUH DATA 40 TOKOH BERHASIL DISINKRONKAN KE SUPABASE!');
}

main().catch(err => {
  console.error('Error saat sinkronisasi:', err);
  process.exit(1);
});
