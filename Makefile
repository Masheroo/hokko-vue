build-and-emulate:
	npm run build
	rm -R mobile/www/
	cp -a dist mobile/www
	cd mobile && cordova emulate android
	cd ../
build-and-run:
	npm run build
	rm -R mobile/www/
	cp -a dist mobile/www
	cd mobile && cordova run android
	cd ../
