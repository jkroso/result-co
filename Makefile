
serve: node_modules
	@node_modules/serve/bin/serve -Slojp 0

test: node_modules
	@node_modules/hydro/bin/hydro test/*.test.js \
		--setup test/hydro.conf.js \
		--harmony

node_modules: *.json
	@packin install \
		--meta deps.json,package.json \
		--folder node_modules

.PHONY: serve test
