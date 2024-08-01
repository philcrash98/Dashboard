#!/bin/bash
cd /home/pi/Dashboard/dist/dashboard/browser
angular-http-server -p 9000
sleep 10
chromium-browser --kiosk localhost:9000