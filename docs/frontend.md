# Structure

Frontend is default [CRA](https://reactjs.org/docs/create-a-new-react-app.html) generated project.

```
public/                                 Static files
src/                                    Source files
    hooks/                              Custom hooks
    i18n/                               Localization
        locales/                        Enabled locales
            en/                         Specific locale (English)
            ua/                         Specific locale (Ukrainian)
        config.ts                       Localization configuration
    icons/                              Icons
    images/                             Images
    pages/                              Pages
    shared/                             Symlink to shared in the repository root
    store/                              Redux store
        sagas/                          Store sagas
            xxxxxx.saga.ts              Specific saga
            yyyyyy.saga.ts              Specific saga
            root.saga.ts                Saga that combines all sagas
        services/                       Http requests and data manipulation
            xxxxxx.service.ts           Specific service
            index.ts                    Barrel file
        slices/                         Store slices
            xxxxxx/                     Specific slice
                xxxxxx.action.ts        Non slice actions
                xxxxxx.selector.ts      Selectors
                xxxxxx.slice.ts         Slice for sync and pending/fulfilled/rejected actions
                index.ts                Barrel file
            index.ts                    Barrel file
        index.ts                        Root store file
    stories/                            Storybook stories
    ui/                                 User interface
        common/                         Basic reusable components (Button, Input, Checkbox, etc.)
            Xxxxxx/                     Specific component folder
                Xxxxxx.module.css       Styles
                Xxxxxx.stories.ts       Stories
                Xxxxxx.tsx              Specific component
                index.ts                Barrel file
            index.ts                    Barrel file
        Xxxxxx/                         Complex components used in a particular page/module
                                        (Messenger, InvestorDashboard, MapDashboard, etc.)
    utils/                              Utilities
    App.tsx                             Routing
    App.css                             CSS module
    index.ts                            Entry point
    index.css                           General styles (tailwind)
```

Try not to use scss modules, because [they don't work good with tailwind](https://lakur.tech/2022/03/31/tailwind-scss-resolve-url-loader-error-processing-css-invalid-mapping/)
