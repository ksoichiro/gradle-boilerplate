# Groovy-Example

Examples of Groovy and Gradle codes.

## Features

* Develop with Eclipse or IntelliJ IDEA
* Multiproject structure
* Configuration for multiple environments
* Tests with Spock
* Code coverage with Cobertura
* Building CoffeeScript, LESS using npm/gulp

## Setup

### Eclipse

* JDK 7 or 8
* Eclipse 4.4 Luna
* Groovy-Eclipse (for 4.4)
* Gradle IDE Pack
* Set `GRADLE_USER_HOME` classpath variable to `/path/to/home/.gradle`

### IntelliJ IDEA

* JDK 7 or 8
* IntelliJ IDEA CE 14

## Test

```sh
$ ./gradlew clean test
```

To see the report, open `app/build/reports/tests/index.html`.

## Cobertura

```sh
$ ./gradlew clean cobertura
```

To see the report, open `app/build/reports/cobertura/index.html`.

## Multi-environments

```sh
(Create archive for production and execute it)
$ ./gradlew packProduction
$ cd app/build/distributions
$ unzip app-production.zip
$ cd app
$ java -cp libs/app.jar:conf com.github.ksoichiro.groovy.example.Example
Environment: production
Hello, world

(Emulate creating archive, unzip archive, and execute for production)
$ ./gradlew emulateProduction
Environment: production
Hello, world
```

## npm/gulp

### Installing node, npm, bower, gulp, ...

```sh
$ ./gradlew npmInstall
```

### Building CSS/JavaScript

```sh
$ ./gradlew gulpBuild
```

## License

Copyright (c) 2015 Soichiro Kashima  
Licensed under MIT license.  
See the bundled [LICENSE](LICENSE) file for details.
