SHELL=/bin/bash

.PHONY : test coverage

all: test coverage

test:
	./node_modules/gulp/bin/gulp.js test

coverage:
	CODECLIMATE_REPO_TOKEN=1b29370d4c1f5159689b076c58197a6db2e623cc11df8eb84df37800cccbb2b4 ./node_modules/codeclimate-test-reporter/bin/codeclimate.js < ./coverage/PhantomJS\ 1.9.8\ \(Linux\)/lcov.info
