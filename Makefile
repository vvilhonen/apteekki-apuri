
ZIP_FILES := $(wildcard icons/*.png) manifest.json content.js

dist/extension.zip: $(ZIP_FILES)
	@mkdir -p dist
	zip dist/extension.zip $(ZIP_FILES)

dist: dist/extension.zip
.PHONY: dist
