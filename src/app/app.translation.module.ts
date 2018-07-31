import { NgModule } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  }
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}


@NgModule({
  imports: [HttpClientModule,
    TranslateModule.forRoot(translationOptions)
  ],
  exports: [TranslateModule],
  providers: [TranslateService]
})

export class AppTranslationModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
