@echo off
cd /d "%~dp0"
title ALFA History - Local Server v1.6.2
echo ========================================================
echo   ALFA History of Islam - Local Server v1.6.2
echo ========================================================
echo.

:: Deteksi python
set PYTHON_CMD=
where python >nul 2>&1
if not errorlevel 1 (
    set PYTHON_CMD=python
) else (
    where py >nul 2>&1
    if not errorlevel 1 (
        set PYTHON_CMD=py
    ) else (
        if exist "C:\Python315\python.exe" set PYTHON_CMD="C:\Python315\python.exe"
        if exist "%LOCALAPPDATA%\Programs\Python\Python313\python.exe" set PYTHON_CMD="%LOCALAPPDATA%\Programs\Python\Python313\python.exe"
        if exist "%LOCALAPPDATA%\Programs\Python\Python312\python.exe" set PYTHON_CMD="%LOCALAPPDATA%\Programs\Python\Python312\python.exe"
    )
)

if "%PYTHON_CMD%"=="" (
    echo [ERROR] Python tidak ditemukan di sistem kamu!
    echo Pastikan Python terinstall dan tercentang 'Add Python to PATH'.
    echo.
    echo Membuka index.html langsung di browser default...
    start "" "index.html"
    echo.
    pause
    exit /b 1
)

echo Menjalankan server menggunakan %PYTHON_CMD%...
%PYTHON_CMD% server.py
if errorlevel 1 (
    echo.
    echo [ERROR] Server berhenti dengan kendala.
    pause
)
