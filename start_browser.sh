#!/bin/bash
sleep 10
export DISPLAY=:0
export XAUTHORITY=/home/pi/.Xauthority
export XDG_RUNTIME_DIR=/run/user/$(id -u)  # Hier die Umgebungsvariable setzen
chromium-browser http://localhost:9000 --start-fullscreen --disable-gpu --disable-software-rasterizer 