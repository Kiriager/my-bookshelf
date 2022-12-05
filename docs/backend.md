# Structure

The backend is using NestJS framework, so please make sure you've read at least:

-   [NestJS introduction](https://docs.nestjs.com).
-   [NestJS overview](https://docs.nestjs.com/first-steps)

Useful links
-   [Sequelize with NestJS](https://docs.nestjs.com/recipes/sql-sequelize)
-   [Barrel export](https://medium.com/@klauskpm/do-a-barrel-export-aa5b79b76b05)

```
config/                             Config files
seeders/                            Seeders for filling db
src/                                Source files
    shared/                         Symlink to shared in the repository root
    xxxxxx/                         Feature directory
        dto/                        Data transfer objects
        entities/                   Database entities (tables)
        index.ts                    Barrel file
        xxxxxx.controller.ts        NestJS Controller
        xxxxxx.module.ts            NestJS module
        xxxxxx.service.ts           NestJS service (Business logic)
    app.module.ts                   Root app module
    app.service.ts                  Root app service
    app.controller.ts               Root app controller
    main.ts                         Main file
test/                               Test files
    xxxxxx/                         Feature test directory
        xxxxxx.mock.ts              Mocked data
        xxxxxx.controller.spec.ts   Unit tests for controller
        xxxxxx.service.spec.ts      Unit tests for service
        xxxxxx.e2e-spec.ts          End-to-end tests for feature
```

---

## Testing

There are two categories of tests that we use:
-   Unit tests. They are used to check correctness of small functions. In our case we use them for service and controller
-   End-to-end tests. They cover interaction between different modules. In our case Controller -> Service -> Repository

You should prioritize e2e tests, because they also cover unit tests in some way.

In order to keep test running process fast, we don't use real db, so repository has to be mocked.

More about it can be found [here](https://docs.nestjs.com/fundamentals/testing)

### Npm scripts for testing
-   Run unit tests `npm run test`
-   Run e2e test `npm run test:e2e`
-   Run unit test recording information about [coverage](https://tsmx.net/jest-full-code-coverage/) `npm run test:cov`
-   If you want to get more information or just more satisfying look of covered tests you can add option `--verbose`.
    For example `npm run test -- --verbose`
