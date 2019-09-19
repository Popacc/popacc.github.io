(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\">\n  <app-header></app-header>\n\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fifth-page/fifth-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fifth-page/fifth-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <div\n    class=\"fifth-page desktop-wrapper\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center\"\n    fxLayoutGap.lt-lg=\"12px\"\n    fxLayoutGap=\"24px\"\n  >\n    <div fxLayout=\"column\" class=\"image-bubble-container\" fxLayoutGap=\"12px\">\n      <div\n        fxLayout=\"row\"\n        fxLayoutAlign=\"flex-end\"\n        fxLayoutAlign.gt-xs=\"flex-start\"\n      >\n        <div fxFlex.gt-xs=\"35%\"></div>\n        <div\n          class=\"talk-bubble tri-right border round btm-left-in\"\n          fxLayoutAlign=\"center center\"\n        >\n          <div class=\"talktext title\">\n            <p>Sa onlajnom je ponovo postalo teško</p>\n          </div>\n        </div>\n      </div>\n      <img\n        src=\"../../../assets/images/strongman-thinking.png\"\n        alt=\"Strongman\"\n        class=\"strongman-image\"\n      />\n    </div>\n    <div class=\"text-below-title\">\n      {{ text }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/final-page/final-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/final-page/final-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <!-- --------------------MOBILE------------------- -->\n  <div *ngIf=\"screenWidth <= 1000; else desktop\">\n    <div\n      class=\"final-page\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center center\"\n      fxLayoutGap=\"30px\"\n    >\n      <div\n        fxLayoutAlign=\"center center\"\n        fxLayout=\"column\"\n        class=\"text-above-book\"\n        fxLayoutGap=\"12px\"\n      >\n        <span class=\"page-title title\"><b>Kako do prvih klijenata?</b></span>\n        <p>\n          Ko su tvoji klijenti? <br />\n          Kako ih privući?<br />\n          Kako ih zadržati?\n        </p>\n        <span class=\"last-sentence\"\n          >Prijavi se i preuzmi priručnik <b>BESPLATNO</b></span\n        >\n      </div>\n      <img\n        src=\"../../../assets/images/strongman-book.jpg\"\n        alt=\"Knjiga\"\n        class=\"mat-elevation-z5\"\n      />\n      <form\n        fxLayout=\"column\"\n        fxLayoutAlign=\"start center\"\n        fxLayoutGap=\"30px\"\n        #form=\"ngForm\"\n      >\n        <mat-form-field\n          floatLabel=\"never\"\n          fxLayoutAlign=\"center center\"\n          class=\"mat-elevation-z3\"\n        >\n          <input\n            matInput\n            placeholder=\"Ime i prezime...\"\n            required\n            pattern=\"[a-zA-Z ]*\"\n            [(ngModel)]=\"userForm.name\"\n            name=\"name\"\n            #name=\"ngModel\"\n          />\n          <mat-error *ngIf=\"formSubmitted && name.hasError('pattern')\"\n            >Ime i prezime može sadržati samo slova</mat-error\n          >\n          <mat-error *ngIf=\"formSubmitted && name.hasError('required')\"\n            >Ime i prezime je obavezno</mat-error\n          >\n        </mat-form-field>\n        <mat-form-field\n          floatLabel=\"never\"\n          fxLayoutAlign=\"center center\"\n          class=\"mat-elevation-z3\"\n        >\n          <input\n            matInput\n            placeholder=\"E-mail...\"\n            required\n            email\n            [(ngModel)]=\"userForm.email\"\n            name=\"email\"\n            #email=\"ngModel\"\n          />\n          <mat-error *ngIf=\"formSubmitted && email.hasError('required')\"\n            >E-mail je obavezan</mat-error\n          >\n          <mat-error *ngIf=\"formSubmitted && email.hasError('email')\"\n            >E-mail nije ispravan</mat-error\n          >\n        </mat-form-field>\n        <button\n          mat-flat-button\n          class=\"pulse-button mat-elevation-z7\"\n          type=\"submit\"\n          (click)=\"form.valid && sendForm(); formSubmitted = true\"\n        >\n          Preuzmi priručnik\n        </button>\n        <mat-error\n          *ngIf=\"formSubmitted && mailService.userExists\"\n          class=\"user-exists\"\n        >\n          Korisnik sa tim E-mailom već postoji!\n        </mat-error>\n      </form>\n    </div>\n  </div>\n\n  <!-- --------------------DESKTOP------------------- -->\n  <ng-template #desktop>\n    <div\n      class=\"final-page desktop-wrapper\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"space-evenly\"\n      fxLayoutGap=\"48px\"\n    >\n      <div class=\"image-wrapper\">\n        <img\n          src=\"../../../assets/images/strongman-book.jpg\"\n          alt=\"Knjiga\"\n          class=\"mat-elevation-z5\"\n        />\n      </div>\n      <div\n        fxLayout=\"column\"\n        fxLayoutAlign=\"center center\"\n        fxLayoutGap=\"48px\"\n        class=\"mat-elevation-z5 right-text\"\n      >\n        <div\n          fxLayoutAlign=\"space-evenly center\"\n          fxLayout=\"column\"\n          class=\"text-above-book\"\n          fxLayoutGap=\"48px\"\n        >\n          <span class=\"page-title title\"><b>Kako do prvih klijenata?</b></span>\n          <p>\n            Ko su tvoji klijenti? <br />\n            Kako ih privući?<br />\n            Kako ih zadržati?\n          </p>\n          <span class=\"last-sentence\"\n            >Prijavi se i preuzmi priručnik <b>BESPLATNO</b>\n          </span>\n        </div>\n\n        <form\n          fxLayout=\"column\"\n          fxLayoutAlign=\"start center\"\n          fxLayoutGap=\"30px\"\n          #form=\"ngForm\"\n        >\n          <mat-form-field\n            floatLabel=\"never\"\n            fxLayoutAlign=\"center center\"\n            class=\"mat-elevation-z3\"\n          >\n            <input\n              matInput\n              placeholder=\"Ime i prezime...\"\n              required\n              pattern=\"[a-zA-Z ]*\"\n              [(ngModel)]=\"userForm.name\"\n              name=\"name\"\n              #name=\"ngModel\"\n            />\n            <mat-error *ngIf=\"formSubmitted && name.hasError('pattern')\"\n              >Ime i prezime može sadržati samo slova</mat-error\n            >\n            <mat-error *ngIf=\"formSubmitted && name.hasError('required')\"\n              >Ime i prezime je obavezno</mat-error\n            >\n          </mat-form-field>\n          <mat-form-field\n            floatLabel=\"never\"\n            fxLayoutAlign=\"center center\"\n            class=\"mat-elevation-z3\"\n          >\n            <input\n              matInput\n              placeholder=\"E-mail...\"\n              required\n              email\n              [(ngModel)]=\"userForm.email\"\n              name=\"email\"\n              #email=\"ngModel\"\n            />\n            <mat-error *ngIf=\"formSubmitted && email.hasError('required')\"\n              >E-mail je obavezan</mat-error\n            >\n            <mat-error *ngIf=\"formSubmitted && email.hasError('email')\"\n              >E-mail nije ispravan</mat-error\n            >\n          </mat-form-field>\n          <button\n            mat-flat-button\n            class=\"pulse-button mat-elevation-z7\"\n            type=\"submit\"\n            (click)=\"form.valid && sendForm(); formSubmitted = true\"\n          >\n            Preuzmi priručnik\n          </button>\n          <mat-error\n            *ngIf=\"formSubmitted && mailService.userExists\"\n            class=\"user-exists\"\n          >\n            Korisnik sa tim E-mailom već postoji!\n          </mat-error>\n        </form>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/first-page/first-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/first-page/first-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"first-page-wrapper\" fxLayout=\"column\">\n  <!-- ------------------MOBILE---------------- -->\n  <div *ngIf=\"screenWidth <= 1000; else desktop\">\n    <div\n      fxLayout=\"column\"\n      class=\"first-page\"\n      fxLayoutGap=\"36px\"\n      fxLayoutAlign=\"center center\"\n    >\n      <div fxLayoutGap=\"24px\" fxLayout=\"column\" class=\"text-below-header\">\n        <div class=\"page-title title\" fxLayout=\"column\" fxLayoutGap=\"12px\">\n          <span>Onlajn personal treneri pažnja!</span>\n          <div>\n            Jedini softver koji će Vam ikada trebati\n          </div>\n        </div>\n        <div class=\"below-title\" fxLayout=\"column\" fxLayoutGap=\"6px\">\n          Zaboravite viber, email, whatsapp, google doc, pdf, youtube, ...\n          <br />\n          sada vam je\n          <b>sve na jednom mestu.</b>\n          <span\n            >Uštedite vreme i\n            <b>impresionirajte svoje klijente</b>\n          </span>\n        </div>\n      </div>\n      <div>\n        <iframe\n          title=\"Strongman video\"\n          [src]=\"safeURL\"\n          frameborder=\"0\"\n          allowfullscreen\n          class=\"mat-elevation-z5\"\n        ></iframe>\n      </div>\n      <form\n        fxLayout=\"column\"\n        fxLayoutAlign=\"start center\"\n        fxLayoutGap=\"30px\"\n        #form=\"ngForm\"\n      >\n        <mat-form-field\n          floatLabel=\"never\"\n          fxLayoutAlign=\"center center\"\n          class=\"mat-elevation-z3\"\n        >\n          <input\n            matInput\n            placeholder=\"Ime i prezime...\"\n            required\n            pattern=\"[a-zA-Z ]*\"\n            [(ngModel)]=\"userForm.name\"\n            name=\"name\"\n            #name=\"ngModel\"\n          />\n          <mat-error *ngIf=\"formSubmitted && name.hasError('pattern')\"\n            >Ime i prezime može sadržati samo slova</mat-error\n          >\n          <mat-error *ngIf=\"formSubmitted && name.hasError('required')\"\n            >Ime i prezime je obavezno</mat-error\n          >\n        </mat-form-field>\n        <mat-form-field\n          floatLabel=\"never\"\n          fxLayoutAlign=\"center center\"\n          class=\"mat-elevation-z3\"\n        >\n          <input\n            matInput\n            placeholder=\"E-mail...\"\n            required\n            email\n            [(ngModel)]=\"userForm.email\"\n            name=\"email\"\n            #email=\"ngModel\"\n          />\n          <mat-error *ngIf=\"formSubmitted && email.hasError('required')\"\n            >E-mail je obavezan</mat-error\n          >\n          <mat-error *ngIf=\"formSubmitted && email.hasError('email')\"\n            >E-mail nije ispravan</mat-error\n          >\n        </mat-form-field>\n        <button\n          mat-flat-button\n          class=\"pulse-button mat-elevation-z7\"\n          type=\"submit\"\n          (click)=\"form.valid && sendForm(); formSubmitted = true\"\n        >\n          Probaj <span class=\"letter-spacer\">BESPLATNO</span> 30 dana\n        </button>\n        <mat-error\n          *ngIf=\"formSubmitted && mailService.userExists\"\n          class=\"user-exists\"\n        >\n          Korisnik sa tim E-mailom već postoji!\n        </mat-error>\n      </form>\n    </div>\n  </div>\n\n  <!-- ------------------DESKTOP--------------------- -->\n  <ng-template #desktop>\n    <div\n      fxLayout=\"row\"\n      class=\"first-page desktop-wrapper\"\n      fxLayoutAlign=\"space-between\"\n      fxLayoutGap=\"48px\"\n    >\n      <div\n        fxLayout=\"column\"\n        fxLayoutGap=\"48px\"\n        fxLayoutAlign=\"start center\"\n        fxFlex=\"50%\"\n      >\n        <div class=\"page-title title\" fxLayout=\"column\" fxLayoutGap=\"12px\">\n          <span>Onlajn personal treneri pažnja!</span>\n          <div>\n            Jedini softver koji će Vam ikada trebati\n          </div>\n        </div>\n        <div class=\"video-wrapper mat-elevation-z5\">\n          <iframe\n            title=\"Strongman video\"\n            [src]=\"safeURL\"\n            frameborder=\"0\"\n            allowfullscreen\n          ></iframe>\n        </div>\n      </div>\n      <div\n        fxLayout=\"column\"\n        fxLayoutAlign=\"space-evenly center\"\n        fxLayoutGap=\"36px\"\n        fxFlex=\"40%\"\n        class=\"mat-elevation-z5 text-right\"\n      >\n        <div\n          fxLayoutGap=\"60px\"\n          fxLayout=\"column\"\n          class=\"text-below-header\"\n          fxLayoutAlign=\"end center\"\n        >\n          <div class=\"below-title\">\n            Zaboravite viber, email, whatsapp, google doc, pdf, youtube, ...\n            sada vam je\n            <b>sve na jednom mestu. </b><br />\n            <span>Uštedite vreme i <b>impresionirajte svoje klijente</b></span>\n          </div>\n        </div>\n        <form\n          fxLayout=\"column\"\n          fxLayoutAlign=\"center center\"\n          fxLayoutGap=\"30px\"\n          #form=\"ngForm\"\n        >\n          <mat-form-field\n            floatLabel=\"never\"\n            fxLayoutAlign=\"center center\"\n            class=\"mat-elevation-z3\"\n          >\n            <input\n              matInput\n              placeholder=\"Ime i prezime...\"\n              required\n              pattern=\"[a-zA-Z ]*\"\n              [(ngModel)]=\"userForm.name\"\n              name=\"name\"\n              #name=\"ngModel\"\n            />\n            <mat-error *ngIf=\"formSubmitted && name.hasError('pattern')\"\n              >Ime i prezime može sadržati samo slova</mat-error\n            >\n            <mat-error *ngIf=\"formSubmitted && name.hasError('required')\"\n              >Ime i prezime je obavezno</mat-error\n            >\n          </mat-form-field>\n          <mat-form-field\n            floatLabel=\"never\"\n            fxLayoutAlign=\"center center\"\n            class=\"mat-elevation-z3\"\n          >\n            <input\n              matInput\n              placeholder=\"E-mail...\"\n              required\n              email\n              [(ngModel)]=\"userForm.email\"\n              name=\"email\"\n              #email=\"ngModel\"\n            />\n            <mat-error *ngIf=\"formSubmitted && email.hasError('required')\"\n              >E-mail je obavezan</mat-error\n            >\n            <mat-error *ngIf=\"formSubmitted && email.hasError('email')\"\n              >E-mail nije ispravan</mat-error\n            >\n          </mat-form-field>\n          <button\n            mat-flat-button\n            class=\"pulse-button mat-elevation-z7\"\n            type=\"submit\"\n            (click)=\"form.valid && sendForm(); formSubmitted = true\"\n          >\n            Probaj <span class=\"letter-spacer\">BESPLATNO</span> 30 dana\n          </button>\n          <mat-error\n            *ngIf=\"formSubmitted && mailService.userExists\"\n            class=\"user-exists\"\n          >\n            Korisnik sa tim E-mailom već postoji!\n          </mat-error>\n        </form>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/footer/footer.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/footer/footer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\" class=\"wrapper\">\n  <div\n    class=\"footer desktop-wrapper\"\n    fxLayoutAlign=\"space-between center\"\n    fxLayout=\"row\"\n  >\n    <!-- <div\n      class=\"header-logo-container\"\n      fxLayoutAlign=\"center center\"\n      routerLink=\"\"\n    >\n      <img\n        src=\"../../../assets/images/logo.svg\"\n        class=\"header-logo\"\n        alt=\"Logotip\"\n      />\n    </div> -->\n    <div fxLayoutGap=\"12px\" fxLayout=\"column\">\n      <div>\n        <span class=\"copyright\">©2019 Moj-trening.com </span> <br />\n        <span>Sva prava zadržana. </span> <br />\n        <span\n          >Zabranjeno je neovlašćeno kopiranje i distribucija sadržaja.</span\n        >\n      </div>\n\n      <a routerLink=\"/terms\"\n        >Politka privatnosti i opšti uslovi korišćenja sajta</a\n      >\n    </div>\n    <div class=\"contact\" fxLayout=\"column\" fxLayoutGap=\"12px\">\n      <span>Kontakt</span>\n      <a href=\"mailto:milan@strongmanmetod.online\"\n        >milan@strongmanmetod.online</a\n      >\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/form-page/form-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/form-page/form-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <div\n    class=\"form-page desktop-wrapper\"\n    fxLayout=\"column\"\n    fxLayoutGap.lt-md=\"60px\"\n    fxLayoutGap=\"142px\"\n    fxLayoutAlign=\"center center\"\n  >\n    <form\n      fxLayout=\"column\"\n      fxLayoutAlign=\"start center\"\n      fxLayoutGap=\"30px\"\n      #form=\"ngForm\"\n      [class]=\"screenWidth >= 1000 ? 'mat-elevation-z5' : ''\"\n    >\n      <mat-form-field\n        floatLabel=\"never\"\n        fxLayoutAlign=\"center center\"\n        class=\"mat-elevation-z3\"\n      >\n        <input\n          matInput\n          placeholder=\"Ime i prezime...\"\n          required\n          pattern=\"[a-zA-Z ]*\"\n          [(ngModel)]=\"userForm.name\"\n          name=\"name\"\n          #name=\"ngModel\"\n        />\n        <mat-error *ngIf=\"formSubmitted && name.hasError('pattern')\"\n          >Ime i prezime može sadržati samo slova</mat-error\n        >\n        <mat-error *ngIf=\"formSubmitted && name.hasError('required')\"\n          >Ime i prezime je obavezno</mat-error\n        >\n      </mat-form-field>\n      <mat-form-field\n        floatLabel=\"never\"\n        fxLayoutAlign=\"center center\"\n        class=\"mat-elevation-z3\"\n      >\n        <input\n          matInput\n          placeholder=\"E-mail...\"\n          required\n          email\n          [(ngModel)]=\"userForm.email\"\n          name=\"email\"\n          #email=\"ngModel\"\n        />\n        <mat-error *ngIf=\"formSubmitted && email.hasError('required')\"\n          >E-mail je obavezan</mat-error\n        >\n        <mat-error *ngIf=\"formSubmitted && email.hasError('email')\"\n          >E-mail nije ispravan</mat-error\n        >\n      </mat-form-field>\n      <button\n        mat-flat-button\n        class=\"pulse-button mat-elevation-z7\"\n        type=\"submit\"\n        (click)=\"form.valid && sendForm(); formSubmitted = true\"\n      >\n        Probaj <span class=\"letter-spacer\">BESPLATNO</span> 30 dana\n      </button>\n      <mat-error\n        *ngIf=\"formSubmitted && mailService.userExists\"\n        class=\"user-exists\"\n      >\n        Korisnik sa tim E-mailom već postoji!\n      </mat-error>\n    </form>\n    <div\n      fxLayout.gt-sm=\"row\"\n      fxLayoutGap.gt-sm=\"12px\"\n      class=\"text-columns\"\n      fxLayout=\"column\"\n      fxLayoutGap=\"60px\"\n      fxLayoutAlign=\"space-between center\"\n      fxLayoutAlign.gt-sm=\"space-between none\"\n    >\n      <div\n        fxLayout=\"column\"\n        fxLayoutAlign=\"start center\"\n        fxLayoutGap=\"24px\"\n        class=\"mat-elevation-z7 column\"\n      >\n        <mat-icon fxLayoutAlign=\"center center\">computer</mat-icon>\n        <div class=\"title\" fxFlex=\"30%\" fxLayoutAlign=\"center center\">\n          Bez tehničkog znanja\n        </div>\n        <div fxLayoutAlign=\"center start\" fxFlex=\"70%\" class=\"text-below-icon\">\n          Trenerima bez tehničkog i programerskog znanja, koji pre svega žele\n          lako i brzo snalaženje.\n        </div>\n      </div>\n      <div\n        fxLayout=\"column\"\n        fxLayoutAlign=\"start center\"\n        fxLayoutGap=\"24px\"\n        class=\"mat-elevation-z7 column\"\n      >\n        <mat-icon fxLayoutAlign=\"center center\">trending_up</mat-icon>\n        <div class=\"title\" fxFlex=\"30%\" fxLayoutAlign=\"center center\">\n          Rast i lični brend\n        </div>\n        <div fxLayoutAlign=\"center start\" fxFlex=\"70%\" class=\"text-below-icon\">\n          Trenerima koji žele da podignu svoj posao na viši nivo i izgrade lični\n          brend.\n        </div>\n      </div>\n      <div\n        fxLayout=\"column\"\n        fxLayoutAlign=\"start center\"\n        fxLayoutGap=\"24px\"\n        class=\"mat-elevation-z7 column\"\n      >\n        <mat-icon fxLayoutAlign=\"center center\">monetization_on</mat-icon>\n        <div class=\"title\" fxFlex=\"30%\" fxLayoutAlign=\"center center\">\n          Dupliranje prihoda\n        </div>\n        <div fxLayoutAlign=\"center start\" fxFlex=\"70%\" class=\"text-below-icon\">\n          Trenerima koji žele da dupliraju svoje prihode sa duplo manje uloženog\n          vremena.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fourth-page/fourth-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fourth-page/fourth-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <div\n    class=\"fourth-page desktop-wrapper\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center\"\n    fxLayoutGap.lt-lg=\"12px\"\n    fxLayoutGap=\"24px\"\n  >\n    <div\n      fxLayout=\"column\"\n      class=\"image-bubble-container\"\n      fxLayoutGap=\"12px\"\n      fxLayoutAlign=\"flex-end\"\n    >\n      <div fxLayout=\"row\" fxLayoutAlign.gt-xs=\"flex-end\">\n        <div\n          class=\"talk-bubble tri-right border round btm-right-in\"\n          fxLayoutAlign=\"center center\"\n        >\n          <div class=\"talktext title\">\n            <p>Kako sam postao onlajn trener</p>\n          </div>\n        </div>\n        <div fxFlex.gt-xs=\"30%\"></div>\n      </div>\n      <img\n        src=\"../../../assets/images/strongman-point.png\"\n        alt=\"Strongman\"\n        class=\"strongman-image\"\n      />\n    </div>\n    <div class=\"text-below-title\">\n      {{ text }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/graph-page/graph-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/graph-page/graph-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ----------------------MOBILE-------------------- -->\n<div\n  *ngIf=\"screenWidth <= 1000; else desktop\"\n  class=\"graph-page\"\n  fxLayout=\"column\"\n  fxLayoutAlign=\"center center\"\n>\n  <div>Nekada davno pre <br />\"<b>Moj-trening.com</b>\"</div>\n  <img src=\"../../../assets/images/strongman-graph.png\" alt=\"Graf\" />\n</div>\n<!-- -------------DESKTOP---------------- -->\n<ng-template #desktop>\n  <div\n    class=\"graph-page-combined\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center center\"\n  >\n    <div\n      fxLayout=\"row\"\n      fxLayoutAlign=\"space-evenly end\"\n      class=\"text-above-combined\"\n    >\n      <div>Pre <b>Moj-trening.com</b></div>\n      <div>Posle <b>Moj-trening.com</b></div>\n    </div>\n    <img src=\"../../../assets/images/combined-image.png\" alt=\"Graf\" />\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/header/header.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/header/header.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <div\n    class=\"header desktop-wrapper\"\n    fxLayout=\"row\"\n    fxLayoutAlign=\"space-between center\"\n  >\n    <div\n      class=\"header-logo-container\"\n      fxLayoutAlign=\"center center\"\n      routerLink=\"\"\n    >\n      <img\n        src=\"../../../assets/images/logo.svg\"\n        class=\"header-logo\"\n        alt=\"Logotip\"\n      />\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <button mat-raised-button>Uloguj se</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/main.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/main.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-first-page></app-first-page>\n<app-second-page></app-second-page>\n<app-third-page></app-third-page>\n<app-fourth-page></app-fourth-page>\n<app-fifth-page></app-fifth-page>\n<app-graph-page></app-graph-page>\n<app-sixth-page></app-sixth-page>\n<app-page-before-form></app-page-before-form>\n<app-form-page></app-form-page>\n<app-testimonials></app-testimonials>\n<app-final-page></app-final-page>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/new-user-snackbar/new-user-snackbar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/new-user-snackbar/new-user-snackbar.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"row\" fxLayoutGap=\"12px\" >\n  \n    <picture> <img [src]=\"users[i].image\" alt=\"Slika\" class=\"image mat-elevation-z2\"/></picture>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n    <span >{{users[i].name}}, {{users[i].city}}</span>\n    <span *ngIf=\"users[i].gender === 'M'\">Upravo kreirao nalog</span>\n    <span *ngIf=\"users[i].gender === 'F'\">Upravo kreirala nalog</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/page-before-form/page-before-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/page-before-form/page-before-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <div\n    class=\"before-form-page desktop-wrapper\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center\"\n    fxLayoutGap.lt-lg=\"12px\"\n    fxLayoutGap=\"24px\"\n  >\n    <div fxLayout=\"column\" class=\"image-bubble-container\" fxLayoutGap=\"12px\">\n      <div\n        fxLayout=\"row\"\n        fxLayoutAlign=\"flex-end\"\n        fxLayoutAlign.gt-xs=\"flex-start\"\n      >\n        <div fxFlex.gt-xs=\"35%\"></div>\n        <div\n          class=\"talk-bubble tri-right border round btm-left-in\"\n          fxLayoutAlign=\"center center\"\n        >\n          <div class=\"talktext title\">\n            <p>Našao sam najbolje rešenje</p>\n          </div>\n        </div>\n      </div>\n      <img\n        src=\"../../../assets/images/strongman-point.png\"\n        alt=\"Strongman\"\n        class=\"strongman-image\"\n      />\n    </div>\n    <div class=\"text-below-title\" [innerHTML]=\"text\"></div>\n    <div *ngIf=\"screenWidth <= 1000\" class=\"image-text-wrapper\">\n      <div>Moj-trening.com</div>\n      <img\n        src=\"../../../assets/images/road-to-happy-small.png\"\n        alt=\"Put do sreće\"\n        class=\"happy-image\"\n      />\n    </div>\n    <div class=\"text-below-title\" [innerHTML]=\"text2\"></div>\n    <img\n      src=\"../../../assets/images/app-sample.png\"\n      alt=\"App\"\n      class=\"app-image\"\n    />\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/second-page/second-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/second-page/second-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <div\n    class=\"checkmark-text-wrapper desktop-wrapper\"\n    fxLayoutAlign=\"space-between none\"\n    fxLayout=\"column\"\n    fxLayoutGap=\"48px\"\n    fxLayoutGap.lt-lg=\"18px\"\n  >\n    <div\n      fxLayout=\"row\"\n      fxLayoutGap.lt-md=\"12px\"\n      fxLayoutGap=\"24px\"\n      fxLayoutAlign=\"start start\"\n    >\n      <mat-icon matListIcon>check</mat-icon>\n      <div>\n        <b>BRŽE</b> otvaranje naloga klijentima i postavljanje plana treninga i\n        ishrane\n      </div>\n    </div>\n    <div\n      fxLayout=\"row\"\n      fxLayoutGap=\"24px\"\n      fxLayoutGap.lt-md=\"12px\"\n      fxLayoutAlign=\"start start\"\n    >\n      <mat-icon matListIcon>check</mat-icon>\n      <div><b>SUPERIORNIJE</b> pravljenje planova treninga i ishrane</div>\n    </div>\n    <div\n      fxLayout=\"row\"\n      fxLayoutGap=\"24px\"\n      fxLayoutGap.lt-md=\"12px\"\n      fxLayoutAlign=\"start start\"\n    >\n      <mat-icon matListIcon>check</mat-icon>\n      <div><b>PREKO 1000</b> vezbi i treninga</div>\n    </div>\n    <div\n      fxLayout=\"row\"\n      fxLayoutGap=\"24px\"\n      fxLayoutGap.lt-md=\"12px\"\n      fxLayoutAlign=\"start start\"\n    >\n      <mat-icon matListIcon>check</mat-icon>\n      <div><b>FILTRIRANJE</b> po odnosu makronutrijenata</div>\n    </div>\n    <div\n      fxLayout=\"row\"\n      fxLayoutGap=\"24px\"\n      fxLayoutGap.lt-md=\"12px\"\n      fxLayoutAlign=\"start start\"\n    >\n      <mat-icon matListIcon>check</mat-icon>\n      <div>\n        <b>PRAĆENJE</b> programa i isteka planova, <b>ČET</b>,\n        <b>AUTOMATSKO</b> slanje poruka, ...\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sixth-page/sixth-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sixth-page/sixth-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <div\n    class=\"sixth-page desktop-wrapper\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center\"\n    fxLayoutGap.lt-lg=\"12px\"\n    fxLayoutGap=\"24px\"\n  >\n    <div fxLayout=\"column\" class=\"image-bubble-container\" fxLayoutGap=\"12px\">\n      <div fxLayout=\"row\" fxLayoutAlign.gt-xs=\"flex-end\">\n        <div\n          class=\"talk-bubble tri-right border round btm-right-in\"\n          fxLayoutAlign=\"center center\"\n        >\n          <div class=\"talktext title\">\n            <p>Može li jednostavnije i brže?</p>\n          </div>\n        </div>\n        <div fxFlex.gt-xs=\"30%\"></div>\n      </div>\n      <img\n        src=\"../../../assets/images/strongman-thinking.png\"\n        alt=\"Strongman\"\n        class=\"strongman-image\"\n      />\n    </div>\n    <div class=\"text-below-title\" [innerHTML]=\"text\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/terms/terms.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/terms/terms.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <button mat-icon-button class=\"back-button\" (click)=\"goBack()\">\n    <mat-icon>\n      arrow_back\n    </mat-icon>\n  </button>\n  <div class=\"desktop-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"title\">\n      POLITIKA PRIVATNOSTI I OPŠTI USLOVI KORIŠĆENJA SAJTA\n    </div>\n    <div *ngFor=\"let termText of termsTexts\">\n      <div class=\"subtitle\">{{ termText.title }}</div>\n      <div class=\"content\">{{ termText.text }}</div>\n      <div *ngFor=\"let subterm of termText.subtexts\">\n        <div class=\"subtitle-2\">{{ subterm.title }}</div>\n        <div *ngIf=\"subterm.title === cookiesTitle\" id=\"cookies\"></div>\n        <div class=\"content\">{{ subterm.text }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/testimonials/testimonials.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/testimonials/testimonials.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\n  <!-- --------------------MOBILE------------------- -->\n  <div\n    *ngIf=\"screenWidth <= 1000; else desktop\"\n    fxLayoutAlign=\"center center\"\n    fxLayout=\"column\"\n    class=\"testimonials\"\n    fxLayoutGap=\"48px\"\n  >\n    <div class=\"title\">Evo šta kažu treneri o nama</div>\n    <div\n      class=\"image-container\"\n      fxLayoutAlign=\"center center\"\n      fxLayoutGap=\"48px\"\n      fxLayout=\"column\"\n    >\n      <img\n        src=\"../../../assets/images/testimonial1.jpg\"\n        alt=\"Komentar\"\n        class=\"mat-elevation-z7\"\n      />\n      <img\n        src=\"../../../assets/images/testimonial2.jpg\"\n        alt=\"Komentar\"\n        class=\"mat-elevation-z7\"\n      />\n    </div>\n  </div>\n\n  <!-- --------------------DESKTOP------------------- -->\n  <ng-template #desktop>\n    <div\n      fxLayoutAlign=\"space-evenly center\"\n      fxLayout=\"column\"\n      class=\"desktop-wrapper testimonials\"\n      fxLayoutGap=\"118px\"\n    >\n      <div class=\"title\">Evo šta kažu treneri o nama</div>\n      <div\n        class=\"image-container\"\n        fxLayoutAlign=\"start\"\n        fxLayoutGap=\"48px\"\n        fxLayout=\"row\"\n      >\n        <div fxFlex=\"50%\">\n          <img\n            src=\"../../../assets/images/testimonial1.jpg\"\n            alt=\"Komentar\"\n            class=\"mat-elevation-z7\"\n          />\n        </div>\n        <div fxFlex=\"50%\">\n          <img\n            src=\"../../../assets/images/testimonial2.jpg\"\n            alt=\"Komentar\"\n            class=\"mat-elevation-z7\"\n          />\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/third-page/third-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/third-page/third-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayoutAlign=\"center center\">\n  <div\n    class=\"third-page desktop-wrapper\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center\"\n    fxLayoutGap.lt-lg=\"12px\"\n    fxLayoutGap=\"24px\"\n  >\n    <div fxLayout=\"column\" class=\"image-bubble-container\" fxLayoutGap=\"12px\">\n      <div\n        fxLayout=\"row\"\n        fxLayoutAlign=\"flex-end\"\n        fxLayoutAlign.gt-xs=\"flex-start\"\n      >\n        <div fxFlex.gt-xs=\"35%\"></div>\n        <div\n          class=\"talk-bubble tri-right border round btm-left-in\"\n          fxLayoutAlign=\"center center\"\n        >\n          <div class=\"talktext title\">\n            <p>Pakao kroz koji svi prolazimo u početku</p>\n          </div>\n        </div>\n      </div>\n      <img\n        src=\"../../../assets/images/strongman-surprised\"\n        alt=\"Strongman\"\n        class=\"strongman-image\"\n      />\n    </div>\n    <div class=\"text-below-title\" [innerHTML]=\"text\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");





const routes = [
    { path: 'terms', component: _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_3__["TermsComponent"] },
    { path: '', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'train-me-online';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_first_page_first_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/first-page/first-page.component */ "./src/app/pages/first-page/first-page.component.ts");
/* harmony import */ var _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/second-page/second-page.component */ "./src/app/pages/second-page/second-page.component.ts");
/* harmony import */ var _pages_new_user_snackbar_new_user_snackbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/new-user-snackbar/new-user-snackbar.component */ "./src/app/pages/new-user-snackbar/new-user-snackbar.component.ts");
/* harmony import */ var _pages_third_page_third_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/third-page/third-page.component */ "./src/app/pages/third-page/third-page.component.ts");
/* harmony import */ var _pages_fourth_page_fourth_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/fourth-page/fourth-page.component */ "./src/app/pages/fourth-page/fourth-page.component.ts");
/* harmony import */ var _pages_final_page_final_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/final-page/final-page.component */ "./src/app/pages/final-page/final-page.component.ts");
/* harmony import */ var _pages_graph_page_graph_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/graph-page/graph-page.component */ "./src/app/pages/graph-page/graph-page.component.ts");
/* harmony import */ var _pages_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/form-page/form-page.component */ "./src/app/pages/form-page/form-page.component.ts");
/* harmony import */ var _pages_page_before_form_page_before_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/page-before-form/page-before-form.component */ "./src/app/pages/page-before-form/page-before-form.component.ts");
/* harmony import */ var _pages_fifth_page_fifth_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/fifth-page/fifth-page.component */ "./src/app/pages/fifth-page/fifth-page.component.ts");
/* harmony import */ var _pages_sixth_page_sixth_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/sixth-page/sixth-page.component */ "./src/app/pages/sixth-page/sixth-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/testimonials/testimonials.component */ "./src/app/pages/testimonials/testimonials.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _pages_first_page_first_page_component__WEBPACK_IMPORTED_MODULE_10__["FirstPageComponent"],
            _pages_second_page_second_page_component__WEBPACK_IMPORTED_MODULE_11__["SecondPageComponent"],
            _pages_new_user_snackbar_new_user_snackbar_component__WEBPACK_IMPORTED_MODULE_12__["NewUserSnackbarComponent"],
            _pages_third_page_third_page_component__WEBPACK_IMPORTED_MODULE_13__["ThirdPageComponent"],
            _pages_fourth_page_fourth_page_component__WEBPACK_IMPORTED_MODULE_14__["FourthPageComponent"],
            _pages_final_page_final_page_component__WEBPACK_IMPORTED_MODULE_15__["FinalPageComponent"],
            _pages_graph_page_graph_page_component__WEBPACK_IMPORTED_MODULE_16__["GraphPageComponent"],
            _pages_form_page_form_page_component__WEBPACK_IMPORTED_MODULE_17__["FormPageComponent"],
            _pages_page_before_form_page_before_form_component__WEBPACK_IMPORTED_MODULE_18__["PageBeforeFormComponent"],
            _pages_fifth_page_fifth_page_component__WEBPACK_IMPORTED_MODULE_19__["FifthPageComponent"],
            _pages_sixth_page_sixth_page_component__WEBPACK_IMPORTED_MODULE_20__["SixthPageComponent"],
            _pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_22__["TestimonialsComponent"],
            _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_23__["TermsComponent"],
            _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
            _pages_main_main_component__WEBPACK_IMPORTED_MODULE_25__["MainComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]
        ],
        entryComponents: [_pages_new_user_snackbar_new_user_snackbar_component__WEBPACK_IMPORTED_MODULE_12__["NewUserSnackbarComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");



const MaterialComponents = [
    _angular_material___WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material___WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material___WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material___WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material___WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
    _angular_material___WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pages/fifth-page/fifth-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/fifth-page/fifth-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: #80beb9;\n}\n\n.fifth-page {\n  color: black;\n  overflow: hidden;\n}\n\n.strongman-image {\n  align-self: flex-start;\n  width: 66%;\n  margin-left: -7.8%;\n}\n\n.talk-bubble {\n  align-self: flex-end;\n}\n\n.talktext p {\n  font-size: 40px;\n  line-height: 48px;\n}\n\n@media all and (max-width: 1000px) {\n  .fifth-page {\n    background-color: #80beb9;\n    color: black;\n    overflow: hidden;\n    padding: 48px 0px;\n  }\n\n  .strongman-image {\n    align-self: flex-start;\n    width: 66%;\n    margin-left: -7.8%;\n  }\n\n  .talk-bubble {\n    align-self: flex-end;\n  }\n\n  .talktext p {\n    font-size: 170%;\n    line-height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvZmlmdGgtcGFnZS9maWZ0aC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9maWZ0aC1wYWdlL2ZpZnRoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0dGOztBREFBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDR0Y7O0VEQUE7SUFDRSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ0dGOztFRERBO0lBQ0Usb0JBQUE7RUNJRjs7RUREQTtJQUNFLGVBQUE7SUFFQSxpQkFBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWZ0aC1wYWdlL2ZpZnRoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MGJlYjk7XG59XG4uZmlmdGgtcGFnZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN0cm9uZ21hbi1pbWFnZSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA2NiU7XG4gIG1hcmdpbi1sZWZ0OiAtNy44JTtcbn1cbi50YWxrLWJ1YmJsZSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4udGFsa3RleHQgcCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuZmlmdGgtcGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwYmViOTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA0OHB4IDBweDtcbiAgfVxuXG4gIC5zdHJvbmdtYW4taW1hZ2Uge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDY2JTtcbiAgICBtYXJnaW4tbGVmdDogLTcuOCU7XG4gIH1cbiAgLnRhbGstYnViYmxlIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuXG4gIC50YWxrdGV4dCBwIHtcbiAgICBmb250LXNpemU6IDE3MCU7XG5cbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxufVxuIiwiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBiZWI5O1xufVxuXG4uZmlmdGgtcGFnZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN0cm9uZ21hbi1pbWFnZSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA2NiU7XG4gIG1hcmdpbi1sZWZ0OiAtNy44JTtcbn1cblxuLnRhbGstYnViYmxlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi50YWxrdGV4dCBwIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5maWZ0aC1wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBiZWI5O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDQ4cHggMHB4O1xuICB9XG5cbiAgLnN0cm9uZ21hbi1pbWFnZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICB3aWR0aDogNjYlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNy44JTtcbiAgfVxuXG4gIC50YWxrLWJ1YmJsZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cblxuICAudGFsa3RleHQgcCB7XG4gICAgZm9udC1zaXplOiAxNzAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/fifth-page/fifth-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/fifth-page/fifth-page.component.ts ***!
  \**********************************************************/
/*! exports provided: FifthPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FifthPageComponent", function() { return FifthPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FifthPageComponent = class FifthPageComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http
            .get('assets/text/fifth-page-text.txt', { responseType: 'text' })
            .subscribe(data => (this.text = data));
    }
};
FifthPageComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FifthPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fifth-page',
        template: __webpack_require__(/*! raw-loader!./fifth-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fifth-page/fifth-page.component.html"),
        styles: [__webpack_require__(/*! ./fifth-page.component.scss */ "./src/app/pages/fifth-page/fifth-page.component.scss")]
    })
], FifthPageComponent);



/***/ }),

/***/ "./src/app/pages/final-page/final-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/final-page/final-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: #3f9bbf;\n}\n\n.final-page {\n  color: white;\n}\n\n.right-text {\n  border-radius: 5px;\n  padding: 24px;\n  max-width: 593px;\n}\n\n.text-above-book {\n  text-align: center;\n}\n\n.page-title {\n  font-size: 50px;\n  letter-spacing: 1px;\n  line-height: 55px;\n}\n\n.text-above-book > p {\n  font-size: 30px;\n  margin: 0px;\n}\n\n.last-sentence {\n  font-size: 35px;\n}\n\n.last-sentence > b {\n  letter-spacing: 2px;\n}\n\nform {\n  width: 100%;\n  max-width: 500px;\n}\n\nmat-form-field {\n  font-size: 20px;\n}\n\nbutton {\n  background-color: #fdcc30;\n  width: 100%;\n  font-size: 25px;\n  font-weight: bold;\n  height: 60px;\n  padding: 0;\n}\n\n.image-wrapper {\n  align-self: center;\n}\n\nimg {\n  border-radius: 5px;\n  max-width: 493px;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n@media all and (max-width: 1000px) {\n  .final-page {\n    background-color: #3f9bbf;\n    color: white;\n    padding: 48px 0px;\n  }\n\n  .text-above-book {\n    width: calc(100vw - 48px);\n  }\n\n  .page-title {\n    font-size: 30px;\n    letter-spacing: 1px;\n    line-height: unset;\n  }\n\n  .text-above-book > p {\n    font-size: 18px;\n  }\n\n  .last-sentence {\n    font-size: 19px;\n  }\n\n  .last-sentence > b {\n    letter-spacing: 2px;\n  }\n\n  form {\n    width: calc(100vw - 48px);\n    height: 100%;\n  }\n\n  button {\n    width: 100%;\n    font-size: 20px;\n    font-weight: bold;\n    height: 50px;\n    padding: 0;\n  }\n\n  img {\n    width: calc(100vw - 48px);\n    max-width: 500px;\n    -o-object-fit: unset;\n       object-fit: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvZmluYWwtcGFnZS9maW5hbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9maW5hbC1wYWdlL2ZpbmFsLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7QUNPRjs7QURMQTtFQUNFLG1CQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLGVBQUE7QUNVRjs7QURSQTtFQUNFLHlCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDVUY7O0FEUkE7RUFDRSxrQkFBQTtBQ1dGOztBRFRBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0FDWUY7O0FEVEE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDWUY7O0VEVkE7SUFDRSx5QkFBQTtFQ2FGOztFRFhBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUNjRjs7RURaQTtJQUNFLGVBQUE7RUNlRjs7RURiQTtJQUNFLGVBQUE7RUNnQkY7O0VEZEE7SUFDRSxtQkFBQTtFQ2lCRjs7RURmQTtJQUNFLHlCQUFBO0lBQ0EsWUFBQTtFQ2tCRjs7RURoQkE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUNtQkY7O0VEakJBO0lBQ0UseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO09BQUEsaUJBQUE7RUNvQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbmFsLXBhZ2UvZmluYWwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmOWJiZjtcbn1cbi5maW5hbC1wYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJpZ2h0LXRleHQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1heC13aWR0aDogNTkzcHg7XG59XG4udGV4dC1hYm92ZS1ib29rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xufVxuLnRleHQtYWJvdmUtYm9vayA+IHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmxhc3Qtc2VudGVuY2Uge1xuICBmb250LXNpemU6IDM1cHg7XG59XG4ubGFzdC1zZW50ZW5jZSA+IGIge1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjYzMwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uaW1hZ2Utd3JhcHBlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiA0OTNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuZmluYWwtcGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmOWJiZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNDhweCAwcHg7XG4gIH1cbiAgLnRleHQtYWJvdmUtYm9vayB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0OHB4KTtcbiAgfVxuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IHVuc2V0O1xuICB9XG4gIC50ZXh0LWFib3ZlLWJvb2sgPiBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmxhc3Qtc2VudGVuY2Uge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuICAubGFzdC1zZW50ZW5jZSA+IGIge1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cbiAgZm9ybSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0OHB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQ4cHgpO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgb2JqZWN0LWZpdDogdW5zZXQ7XG4gIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmOWJiZjtcbn1cblxuLmZpbmFsLXBhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodC10ZXh0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXgtd2lkdGg6IDU5M3B4O1xufVxuXG4udGV4dC1hYm92ZS1ib29rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG59XG5cbi50ZXh0LWFib3ZlLWJvb2sgPiBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmxhc3Qtc2VudGVuY2Uge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5sYXN0LXNlbnRlbmNlID4gYiB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGNjMzA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1heC13aWR0aDogNDkzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZpbmFsLXBhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjliYmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDQ4cHggMHB4O1xuICB9XG5cbiAgLnRleHQtYWJvdmUtYm9vayB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0OHB4KTtcbiAgfVxuXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBsaW5lLWhlaWdodDogdW5zZXQ7XG4gIH1cblxuICAudGV4dC1hYm92ZS1ib29rID4gcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLmxhc3Qtc2VudGVuY2Uge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuXG4gIC5sYXN0LXNlbnRlbmNlID4gYiB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDhweCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDhweCk7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBvYmplY3QtZml0OiB1bnNldDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/final-page/final-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/final-page/final-page.component.ts ***!
  \**********************************************************/
/*! exports provided: FinalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalPageComponent", function() { return FinalPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mail.service */ "./src/app/services/mail.service.ts");




let FinalPageComponent = class FinalPageComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.userForm = {
            name: '',
            email: '',
            password: 'treniraj'
            // surname: ''
        };
        this.formSubmitted = false;
        this.getScreenSize();
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
    }
    ngOnInit() { }
    sendForm() {
        this.formSubmitted = true;
        this.mailService.send(this.userForm);
    }
};
FinalPageComponent.ctorParameters = () => [
    { type: src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], FinalPageComponent.prototype, "getScreenSize", null);
FinalPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-final-page',
        template: __webpack_require__(/*! raw-loader!./final-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/final-page/final-page.component.html"),
        styles: [__webpack_require__(/*! ./final-page.component.scss */ "./src/app/pages/final-page/final-page.component.scss")]
    })
], FinalPageComponent);



/***/ }),

/***/ "./src/app/pages/first-page/first-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/first-page/first-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".first-page-wrapper {\n  background-color: #0c629c;\n}\n\n.first-page {\n  color: white;\n  width: 100%;\n}\n\n.desktop-wrapper {\n  padding-top: 48px;\n  width: calc(100vw - 20%);\n  width: -o-calc(100vw - 20%);\n}\n\n.text-below-header {\n  width: 100%;\n}\n\n.page-title {\n  font-weight: bolder;\n  font-size: 45px;\n  text-align: center;\n  line-height: 45px;\n}\n\n.page-title > span {\n  font-size: 30px;\n  font-weight: lighter;\n  line-height: 30px;\n}\n\n.below-title {\n  font-size: 24px;\n  text-align: left;\n  color: #f3f3f3;\n  max-width: 400px;\n}\n\n.video-wrapper {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 55%;\n}\n\niframe {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  border-radius: 5px;\n}\n\n.text-right {\n  padding: 24px;\n  border-radius: 5px;\n}\n\nform {\n  width: 100%;\n  max-width: 400px;\n  align-self: center;\n}\n\nmat-form-field {\n  font-size: 20px;\n}\n\nbutton {\n  background-color: #fdcc30;\n  padding: 0 6px;\n  width: 100%;\n  font-size: 22px;\n  white-space: normal;\n  line-height: 21px;\n  font-weight: bold;\n  height: 60px;\n}\n\n.letter-spacer {\n  letter-spacing: 2px;\n}\n\n@media all and (max-width: 1000px) {\n  .first-page-wrapper {\n    height: 100%;\n  }\n\n  .first-page {\n    height: 100%;\n    padding: 24px 0px 48px 0px;\n  }\n\n  .text-below-header {\n    width: calc(100vw - 48px);\n  }\n\n  .page-title {\n    font-size: 30px;\n    line-height: 1;\n    letter-spacing: 2px;\n  }\n\n  .page-title > span {\n    font-size: 18px;\n  }\n\n  .below-title {\n    font-size: 17px;\n    line-height: 21px;\n    align-self: center;\n    text-align: center;\n    width: 100%;\n  }\n\n  iframe {\n    position: unset;\n    height: 49vw;\n    min-height: 153px;\n    width: calc(100vw - 48px);\n    min-width: unset;\n    align-self: center;\n    max-width: 600px;\n    max-height: 340px;\n  }\n\n  form {\n    width: calc(100vw - 48px);\n    height: 100%;\n  }\n\n  button {\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvZmlyc3QtcGFnZS9maXJzdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9maXJzdC1wYWdlL2ZpcnN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFHQSwyQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREZBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRFBBO0VBQ0UsZUFBQTtBQ1VGOztBRFJBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEUkE7RUFDRSxtQkFBQTtBQ1dGOztBRFRBO0VBQ0U7SUFDRSxZQUFBO0VDWUY7O0VEVkE7SUFDRSxZQUFBO0lBQ0EsMEJBQUE7RUNhRjs7RURYQTtJQUNFLHlCQUFBO0VDY0Y7O0VEWkE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDZUY7O0VEYkE7SUFDRSxlQUFBO0VDZ0JGOztFRGRBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNpQkY7O0VEZEE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQ2lCRjs7RURmQTtJQUNFLHlCQUFBO0lBQ0EsWUFBQTtFQ2tCRjs7RURoQkE7SUFDRSxlQUFBO0VDbUJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXJzdC1wYWdlL2ZpcnN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3QtcGFnZS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNjI5Yztcbn1cbi5maXJzdC1wYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXNrdG9wLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogNDhweDtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMCUpO1xuICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMHZ3IC0gMjAlKTtcbiAgd2lkdGg6IC1tb3otY2FsYygxMDB2dyAtIDIwJSk7XG4gIHdpZHRoOiAtby1jYWxjKDEwMHZ3IC0gMjAlKTtcbn1cbi50ZXh0LWJlbG93LWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBhZ2UtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5wYWdlLXRpdGxlID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uYmVsb3ctdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZjNmM2YzO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLnZpZGVvLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1NSU7XG59XG5pZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRleHQtcmlnaHQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkY2MzMDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubGV0dGVyLXNwYWNlciB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZpcnN0LXBhZ2Utd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5maXJzdC1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjRweCAwcHggNDhweCAwcHg7XG4gIH1cbiAgLnRleHQtYmVsb3ctaGVhZGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQ4cHgpO1xuICB9XG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgfVxuICAucGFnZS10aXRsZSA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuYmVsb3ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgaGVpZ2h0OiA0OXZ3O1xuICAgIG1pbi1oZWlnaHQ6IDE1M3B4O1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDhweCk7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcbiAgfVxuICBmb3JtIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQ4cHgpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxufVxuIiwiLmZpcnN0LXBhZ2Utd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzYyOWM7XG59XG5cbi5maXJzdC1wYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlc2t0b3Atd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiA0OHB4O1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDIwJSk7XG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwdncgLSAyMCUpO1xuICB3aWR0aDogLW1vei1jYWxjKDEwMHZ3IC0gMjAlKTtcbiAgd2lkdGg6IC1vLWNhbGMoMTAwdncgLSAyMCUpO1xufVxuXG4udGV4dC1iZWxvdy1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5wYWdlLXRpdGxlID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uYmVsb3ctdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZjNmM2YzO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4udmlkZW8td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDU1JTtcbn1cblxuaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRleHQtcmlnaHQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkY2MzMDtcbiAgcGFkZGluZzogMCA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubGV0dGVyLXNwYWNlciB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuZmlyc3QtcGFnZS13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZmlyc3QtcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDI0cHggMHB4IDQ4cHggMHB4O1xuICB9XG5cbiAgLnRleHQtYmVsb3ctaGVhZGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQ4cHgpO1xuICB9XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB9XG5cbiAgLnBhZ2UtdGl0bGUgPiBzcGFuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAuYmVsb3ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgaGVpZ2h0OiA0OXZ3O1xuICAgIG1pbi1oZWlnaHQ6IDE1M3B4O1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDhweCk7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDhweCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/first-page/first-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/first-page/first-page.component.ts ***!
  \**********************************************************/
/*! exports provided: FirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _new_user_snackbar_new_user_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../new-user-snackbar/new-user-snackbar.component */ "./src/app/pages/new-user-snackbar/new-user-snackbar.component.ts");
/* harmony import */ var src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mail.service */ "./src/app/services/mail.service.ts");








let FirstPageComponent = class FirstPageComponent {
    constructor(sanitizer, snackBar, mailService) {
        this.sanitizer = sanitizer;
        this.snackBar = snackBar;
        this.mailService = mailService;
        this.videoURL = 'https://www.youtube.com/embed/PzkiNG-DS18';
        this.users = [
            {
                name: 'Petar',
                city: 'Beograd',
                gender: 'M',
                image: '../../../assets/images/new-user-images/male-1.jpg'
            },
            {
                name: 'Ivana',
                city: 'Niš',
                gender: 'F',
                image: '../../../assets/images/new-user-images/female-1.jpg'
            },
            {
                name: 'Dorđe',
                city: 'Požarevac',
                gender: 'M',
                image: '../../../assets/images/new-user-images/male-2.jpg'
            },
            {
                name: 'Nikola',
                city: 'Novi Sad',
                gender: 'M',
                image: '../../../assets/images/new-user-images/male-3.jpg'
            },
            {
                name: 'Zorana',
                city: 'Leskovac',
                gender: 'F',
                image: '../../../assets/images/new-user-images/female-2.jpg'
            },
            {
                name: 'Andrija',
                city: 'Niš',
                gender: 'M',
                image: '../../../assets/images/new-user-images/male-4.jpg'
            },
            {
                name: 'Miloš',
                city: 'Kragujevac',
                gender: 'M',
                image: '../../../assets/images/new-user-images/male-5.jpg'
            },
            {
                name: 'Nina',
                city: 'Subotica',
                gender: 'F',
                image: '../../../assets/images/new-user-images/female-3.jpg'
            },
            {
                name: 'Jovana',
                city: 'Smederevo',
                gender: 'F',
                image: '../../../assets/images/new-user-images/female-4.jpg'
            },
            {
                name: 'Ivana',
                city: 'Beograd',
                gender: 'F',
                image: '../../../assets/images/new-user-images/female-5.jpg'
            },
            {
                name: 'Petar',
                city: 'Niš',
                gender: 'M',
                image: '../../../assets/images/new-user-images/male-6.jpg'
            },
            {
                name: 'Vuk',
                city: 'Jagodina',
                gender: 'M',
                image: '../../../assets/images/new-user-images/male-1.jpg' // ?????
            },
            {
                name: 'Milan',
                city: 'Zrenjanin',
                gender: 'M',
                image: '../../../assets/images/new-user-images/male-2.jpg' // ?????
            },
            {
                name: 'Emilija',
                city: 'Kragujevac',
                gender: 'F',
                image: '../../../assets/images/new-user-images/female-6.jpg'
            },
            {
                name: 'Anja',
                city: 'Novi Sad',
                gender: 'F',
                image: '../../../assets/images/new-user-images/female-1.jpg' // ???????????
            },
            {
                name: 'Ivana',
                city: 'Kruševac',
                gender: 'F',
                image: '../../../assets/images/new-user-images/female-2.jpg' // ?????????????
            }
        ];
        this.userForm = {
            name: '',
            email: '',
            password: 'treniraj'
        };
        this.formSubmitted = false;
        this.getScreenSize();
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
    }
    openSnackBar() {
        if (this.i < this.users.length - 1) {
            this.i++;
        }
        else {
            this.i = 0;
        }
        this.snackBar.openFromComponent(_new_user_snackbar_new_user_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["NewUserSnackbarComponent"], {
            duration: 3000,
            data: { i: this.i, users: this.users }
        });
    }
    ngOnInit() {
        this.i = -1;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(30000).subscribe(x => this.openSnackBar());
        //  this.openSnackBar();
    }
    sendForm() {
        this.formSubmitted = false;
        this.mailService.send(this.userForm);
    }
};
FirstPageComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_6__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], FirstPageComponent.prototype, "getScreenSize", null);
FirstPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first-page',
        template: __webpack_require__(/*! raw-loader!./first-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/first-page/first-page.component.html"),
        styles: [__webpack_require__(/*! ./first-page.component.scss */ "./src/app/pages/first-page/first-page.component.scss")]
    })
], FirstPageComponent);



/***/ }),

/***/ "./src/app/pages/footer/footer.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: black;\n}\n\n.footer {\n  padding: 48px 0px;\n  text-align: center;\n  color: #f3f3f3;\n}\n\n.copyright {\n  font-size: 21px;\n}\n\n.header-logo-container {\n  margin-left: -24px;\n  cursor: pointer;\n  outline: none;\n}\n\n.header-logo {\n  width: 300px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\na {\n  -webkit-text-decoration-color: #f3f3f3;\n          text-decoration-color: #f3f3f3;\n  color: #f3f3f3;\n}\n\n.contact {\n  text-align: right;\n}\n\n.contact > span {\n  font-size: 21px;\n}\n\n@media all and (max-width: 1000px) {\n  .footer {\n    padding: 12px 24px;\n  }\n\n  .header-logo-container {\n    margin-left: -24px;\n  }\n\n  .header-logo {\n    width: 130px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0lGOztBRERBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7QUNJRjs7QURGQTtFQUNFLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxjQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtBQ09GOztBRExBO0VBQ0U7SUFDRSxrQkFBQTtFQ1FGOztFRE5BO0lBQ0Usa0JBQUE7RUNTRjs7RUROQTtJQUNFLFlBQUE7SUFDQSx5QkFBQTtPQUFBLHNCQUFBO0VDU0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDQ4cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZjNmM2YzO1xufVxuLmNvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbi5oZWFkZXItbG9nby1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogLTI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2YzZjNmMztcbiAgY29sb3I6ICNmM2YzZjM7XG59XG4uY29udGFjdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNvbnRhY3QgPiBzcGFuIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgfVxuICAuaGVhZGVyLWxvZ28tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTI0cHg7XG4gIH1cblxuICAuaGVhZGVyLWxvZ28ge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICB9XG59XG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogNDhweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmM2YzZjM7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5oZWFkZXItbG9nby1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogLTI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmhlYWRlci1sb2dvIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZjNmM2YzO1xuICBjb2xvcjogI2YzZjNmMztcbn1cblxuLmNvbnRhY3Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNvbnRhY3QgPiBzcGFuIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xuICB9XG5cbiAgLmhlYWRlci1sb2dvLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xuICB9XG5cbiAgLmhlYWRlci1sb2dvIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/pages/form-page/form-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/form-page/form-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: #0c629c;\n}\n\nform {\n  width: 50%;\n  height: 100%;\n  max-width: 500px;\n  padding: 24px;\n  border-radius: 5px;\n}\n\nmat-form-field {\n  font-size: 20px;\n  color: white;\n}\n\nbutton {\n  background-color: #fdcc30;\n  width: 100%;\n  font-size: 24px;\n  white-space: normal;\n  line-height: 23px;\n  font-weight: bold;\n  height: 60px;\n  padding: 0 6px;\n}\n\n.letter-spacer {\n  letter-spacing: 2px;\n}\n\n.text-columns {\n  color: #0c629c;\n  text-align: center;\n  font-size: 20px;\n  width: 100%;\n}\n\n.column {\n  background-color: #f3f3f3;\n  border-radius: 5px;\n  padding: 48px 10px;\n  width: 33%;\n}\n\n.text-below-icon {\n  font-size: 25px;\n  min-height: 70%;\n  color: #4a4a4a;\n}\n\n.title {\n  font-size: 40px;\n  letter-spacing: 1px;\n  z-index: 3;\n  min-height: 20%;\n  line-height: 30px;\n}\n\nmat-icon {\n  z-index: 2;\n  font-size: 100px;\n  margin-bottom: 48px !important;\n}\n\n@media all and (max-width: 1000px) {\n  .form-page {\n    padding-top: 15% !important;\n    padding-bottom: 48px;\n  }\n\n  form {\n    width: calc(100vw - 48px);\n    height: 100%;\n    padding: 0px;\n  }\n\n  button {\n    width: 100%;\n    font-size: 17px;\n    font-weight: bold;\n    height: 50px;\n    padding: 0;\n  }\n\n  .letter-spacer {\n    letter-spacing: 2px;\n  }\n\n  .text-columns {\n    word-break: break-word;\n    text-align: center;\n    font-size: 20px;\n    width: calc(100vw - 48px);\n  }\n\n  .column {\n    width: calc(100vw - 48px);\n    max-width: 500px;\n    padding: 24px 12px;\n  }\n\n  .text-below-icon {\n    font-size: 19px;\n  }\n\n  .title {\n    min-height: unset;\n    font-size: 30px;\n    margin-top: 23px;\n  }\n\n  mat-icon {\n    font-size: 68px;\n    margin-bottom: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvZm9ybS1wYWdlL2Zvcm0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9ybS1wYWdlL2Zvcm0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ09GOztBRExBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNRRjs7QURMQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxvQkFBQTtFQ1FGOztFRExBO0lBQ0UseUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQ1FGOztFRE5BO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VDU0Y7O0VETkE7SUFDRSxtQkFBQTtFQ1NGOztFRFBBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtFQ1VGOztFRFJBO0lBQ0UseUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VDV0Y7O0VEVEE7SUFDRSxlQUFBO0VDWUY7O0VEVkE7SUFDRSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ2FGOztFRFhBO0lBQ0UsZUFBQTtJQUNBLDZCQUFBO0VDY0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0tcGFnZS9mb3JtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzYyOWM7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjYzMwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMCA2cHg7XG59XG4vLyBpbiBidXR0b25cbi5sZXR0ZXItc3BhY2VyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi50ZXh0LWNvbHVtbnMge1xuICBjb2xvcjogIzBjNjI5YztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNDhweCAxMHB4O1xuICB3aWR0aDogMzMlO1xufVxuLnRleHQtYmVsb3ctaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWluLWhlaWdodDogNzAlO1xuICBjb2xvcjogIzRhNGE0YTtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgei1pbmRleDogMztcbiAgbWluLWhlaWdodDogMjAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbm1hdC1pY29uIHtcbiAgei1pbmRleDogMjtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvcm0tcGFnZSB7XG4gICAgcGFkZGluZy10b3A6IDE1JSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiA0OHB4O1xuICB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0OHB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC8vIGluIGJ1dHRvblxuICAubGV0dGVyLXNwYWNlciB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgfVxuICAudGV4dC1jb2x1bW5zIHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0OHB4KTtcbiAgfVxuICAuY29sdW1uIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQ4cHgpO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMjRweCAxMnB4O1xuICB9XG4gIC50ZXh0LWJlbG93LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuICAudGl0bGUge1xuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xuICB9XG4gIG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDY4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNjI5Yztcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjYzMwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5cbi5sZXR0ZXItc3BhY2VyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLnRleHQtY29sdW1ucyB7XG4gIGNvbG9yOiAjMGM2MjljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2x1bW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDQ4cHggMTBweDtcbiAgd2lkdGg6IDMzJTtcbn1cblxuLnRleHQtYmVsb3ctaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWluLWhlaWdodDogNzAlO1xuICBjb2xvcjogIzRhNGE0YTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB6LWluZGV4OiAzO1xuICBtaW4taGVpZ2h0OiAyMCU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG5tYXQtaWNvbiB7XG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mb3JtLXBhZ2Uge1xuICAgIHBhZGRpbmctdG9wOiAxNSUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDhweCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmxldHRlci1zcGFjZXIge1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cblxuICAudGV4dC1jb2x1bW5zIHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0OHB4KTtcbiAgfVxuXG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDhweCk7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gIH1cblxuICAudGV4dC1iZWxvdy1pY29uIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cblxuICAudGl0bGUge1xuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xuICB9XG5cbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/form-page/form-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/form-page/form-page.component.ts ***!
  \********************************************************/
/*! exports provided: FormPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageComponent", function() { return FormPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mail.service */ "./src/app/services/mail.service.ts");



let FormPageComponent = class FormPageComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.userForm = {
            name: '',
            email: '',
            password: 'treniraj'
            // surname: ''
        };
        this.formSubmitted = false;
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
    }
    ngOnInit() {
        this.getScreenSize();
    }
    sendForm() {
        this.formSubmitted = false;
        this.mailService.send(this.userForm);
    }
};
FormPageComponent.ctorParameters = () => [
    { type: src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], FormPageComponent.prototype, "getScreenSize", null);
FormPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-page',
        template: __webpack_require__(/*! raw-loader!./form-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/form-page/form-page.component.html"),
        styles: [__webpack_require__(/*! ./form-page.component.scss */ "./src/app/pages/form-page/form-page.component.scss")]
    })
], FormPageComponent);



/***/ }),

/***/ "./src/app/pages/fourth-page/fourth-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/fourth-page/fourth-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: black;\n}\n\n.fourth-page {\n  color: white;\n  overflow: hidden;\n}\n\n.strongman-image {\n  align-self: flex-end;\n  width: 70%;\n  margin-right: -15.5%;\n}\n\n.talk-bubble {\n  align-self: flex-end;\n}\n\n.talktext p {\n  font-size: 40px;\n}\n\n.text-below-title {\n  text-align: right;\n}\n\n@media all and (max-width: 1000px) {\n  .fourth-page {\n    background-color: black;\n    color: white;\n    overflow: hidden;\n    padding: 48px 0px;\n  }\n\n  .strongman-image {\n    align-self: flex-end;\n    width: 70%;\n    margin-right: -15.5%;\n  }\n\n  .talk-bubble {\n    align-self: flex-start;\n  }\n\n  .talktext p {\n    font-size: 170%;\n    line-height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvZm91cnRoLXBhZ2UvZm91cnRoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZvdXJ0aC1wYWdlL2ZvdXJ0aC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FERkE7RUFDRSxpQkFBQTtBQ0tGOztBREZBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDS0Y7O0VERkE7SUFDRSxvQkFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtFQ0tGOztFREZBO0lBQ0Usc0JBQUE7RUNLRjs7RURIQTtJQUNFLGVBQUE7SUFFQSxpQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3VydGgtcGFnZS9mb3VydGgtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uZm91cnRoLXBhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdHJvbmdtYW4taW1hZ2Uge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTUuNSU7XG59XG4udGFsay1idWJibGUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi50YWxrdGV4dCBwIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLnRleHQtYmVsb3ctdGl0bGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mb3VydGgtcGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNDhweCAwcHg7XG4gIH1cblxuICAuc3Ryb25nbWFuLWltYWdlIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1yaWdodDogLTE1LjUlO1xuICB9XG5cbiAgLnRhbGstYnViYmxlIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC50YWxrdGV4dCBwIHtcbiAgICBmb250LXNpemU6IDE3MCU7XG5cbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxufVxuIiwiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmZvdXJ0aC1wYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3Ryb25nbWFuLWltYWdlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1yaWdodDogLTE1LjUlO1xufVxuXG4udGFsay1idWJibGUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnRhbGt0ZXh0IHAge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi50ZXh0LWJlbG93LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuZm91cnRoLXBhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDQ4cHggMHB4O1xuICB9XG5cbiAgLnN0cm9uZ21hbi1pbWFnZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNS41JTtcbiAgfVxuXG4gIC50YWxrLWJ1YmJsZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgfVxuXG4gIC50YWxrdGV4dCBwIHtcbiAgICBmb250LXNpemU6IDE3MCU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/fourth-page/fourth-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/fourth-page/fourth-page.component.ts ***!
  \************************************************************/
/*! exports provided: FourthPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourthPageComponent", function() { return FourthPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FourthPageComponent = class FourthPageComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http
            .get('assets/text/fourth-page-text.txt', { responseType: 'text' })
            .subscribe(data => (this.text = data));
    }
};
FourthPageComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FourthPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fourth-page',
        template: __webpack_require__(/*! raw-loader!./fourth-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fourth-page/fourth-page.component.html"),
        styles: [__webpack_require__(/*! ./fourth-page.component.scss */ "./src/app/pages/fourth-page/fourth-page.component.scss")]
    })
], FourthPageComponent);



/***/ }),

/***/ "./src/app/pages/graph-page/graph-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/graph-page/graph-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".graph-page {\n  overflow: hidden;\n  min-height: 400px;\n}\n\n.graph-page > img {\n  width: 100%;\n  min-width: 782px;\n  margin-left: 5%;\n}\n\n.graph-page > div {\n  font-size: 21px;\n  padding-top: 60px;\n  text-align: center;\n}\n\ndiv > b {\n  letter-spacing: 2px;\n}\n\n.graph-page-combined {\n  overflow: hidden;\n  padding-top: 84px;\n}\n\n.text-above-combined {\n  width: 100%;\n  font-size: 30px;\n  max-width: 1700px;\n  margin-bottom: -3%;\n  z-index: 1;\n  text-align: center;\n}\n\n.graph-page-combined > img {\n  width: calc(100vw - 15%);\n  max-width: 1700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvZ3JhcGgtcGFnZS9ncmFwaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ncmFwaC1wYWdlL2dyYXBoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ01GOztBREpBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JhcGgtcGFnZS9ncmFwaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXBoLXBhZ2Uge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cbi5ncmFwaC1wYWdlID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogNzgycHg7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5ncmFwaC1wYWdlID4gZGl2IHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZGl2ID4gYiB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uZ3JhcGgtcGFnZS1jb21iaW5lZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiA4NHB4O1xufVxuLnRleHQtYWJvdmUtY29tYmluZWQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTMlO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JhcGgtcGFnZS1jb21iaW5lZCA+IGltZyB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTUlKTtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG59XG4iLCIuZ3JhcGgtcGFnZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4uZ3JhcGgtcGFnZSA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDc4MnB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5ncmFwaC1wYWdlID4gZGl2IHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYgPiBiIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLmdyYXBoLXBhZ2UtY29tYmluZWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogODRweDtcbn1cblxuLnRleHQtYWJvdmUtY29tYmluZWQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTMlO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmFwaC1wYWdlLWNvbWJpbmVkID4gaW1nIHtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNSUpO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/graph-page/graph-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/graph-page/graph-page.component.ts ***!
  \**********************************************************/
/*! exports provided: GraphPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphPageComponent", function() { return GraphPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GraphPageComponent = class GraphPageComponent {
    constructor() { }
    ngOnInit() {
        this.getScreenSize();
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], GraphPageComponent.prototype, "getScreenSize", null);
GraphPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-graph-page',
        template: __webpack_require__(/*! raw-loader!./graph-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/graph-page/graph-page.component.html"),
        styles: [__webpack_require__(/*! ./graph-page.component.scss */ "./src/app/pages/graph-page/graph-page.component.scss")]
    })
], GraphPageComponent);



/***/ }),

/***/ "./src/app/pages/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: black;\n}\n\n.header {\n  padding: 12px 0px;\n}\n\n.header-logo-container {\n  margin-left: -24px;\n  cursor: pointer;\n  outline: none;\n}\n\n.header-logo {\n  width: 130px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\nbutton {\n  background-color: black;\n  color: white;\n  font-size: 117%;\n  width: 100%;\n  height: 100%;\n  letter-spacing: 1px;\n  margin-right: -12px;\n}\n\n@media all and (max-width: 1000px) {\n  .header {\n    padding: 12px 24px;\n  }\n\n  .header-logo-container {\n    margin-left: -24px;\n  }\n\n  .header-logo {\n    width: 130px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n  }\n\n  button {\n    background-color: black;\n    color: white;\n    font-size: 117%;\n    width: 100%;\n    height: 100%;\n    letter-spacing: 1px;\n    margin-right: -12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7QUNFRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0Usa0JBQUE7RUNFRjs7RURBQTtJQUNFLGtCQUFBO0VDR0Y7O0VEQUE7SUFDRSxZQUFBO0lBQ0EseUJBQUE7T0FBQSxzQkFBQTtFQ0dGOztFREFBO0lBQ0UsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMnB4IDBweDtcbn1cblxuLmhlYWRlci1sb2dvLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTMwcHg7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTE3JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgfVxuICAuaGVhZGVyLWxvZ28tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTI0cHg7XG4gIH1cblxuICAuaGVhZGVyLWxvZ28ge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMTclO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTEycHg7XG4gIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMnB4IDBweDtcbn1cblxuLmhlYWRlci1sb2dvLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICB3aWR0aDogMTMwcHg7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTE3JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgfVxuXG4gIC5oZWFkZXItbG9nby1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgfVxuXG4gIC5oZWFkZXItbG9nbyB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIH1cblxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDExNyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/main/main.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/main/main.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/pages/main/main.component.scss")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/pages/new-user-snackbar/new-user-snackbar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/new-user-snackbar/new-user-snackbar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-snack-bar-handset .mat-snack-bar-container {\n  height: 48px;\n  box-sizing: content-box;\n}\n\npicture {\n  width: 48px;\n  height: 48px;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvbmV3LXVzZXItc25hY2tiYXIvbmV3LXVzZXItc25hY2tiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25ldy11c2VyLXNuYWNrYmFyL25ldy11c2VyLXNuYWNrYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3LXVzZXItc25hY2tiYXIvbmV3LXVzZXItc25hY2tiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItaGFuZHNldCAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxucGljdHVyZSB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiIsIjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1oYW5kc2V0IC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDhweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbnBpY3R1cmUge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/new-user-snackbar/new-user-snackbar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/new-user-snackbar/new-user-snackbar.component.ts ***!
  \************************************************************************/
/*! exports provided: NewUserSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserSnackbarComponent", function() { return NewUserSnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let NewUserSnackbarComponent = class NewUserSnackbarComponent {
    constructor(data) {
        this.data = data;
        this.i = 0;
        this.i = this.data.i;
        this.users = this.data.users;
    }
    ngOnInit() { }
};
NewUserSnackbarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] }
];
NewUserSnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-user-snackbar',
        template: __webpack_require__(/*! raw-loader!./new-user-snackbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/new-user-snackbar/new-user-snackbar.component.html"),
        styles: [__webpack_require__(/*! ./new-user-snackbar.component.scss */ "./src/app/pages/new-user-snackbar/new-user-snackbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))
], NewUserSnackbarComponent);



/***/ }),

/***/ "./src/app/pages/page-before-form/page-before-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/page-before-form/page-before-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: #ee506f;\n}\n\n.before-form-page {\n  color: white;\n}\n\n.strongman-image {\n  align-self: flex-start;\n  width: 70%;\n  margin-left: -10%;\n}\n\n.talk-bubble {\n  align-self: flex-end;\n}\n\n.talktext p {\n  font-size: 40px;\n}\n\n.app-image {\n  width: 80%;\n  align-self: center;\n  margin-bottom: -192px;\n  z-index: 10;\n  max-width: 40%;\n}\n\n@media all and (max-width: 1000px) {\n  .before-form-page {\n    padding-bottom: 0px !important;\n    padding-top: 48px;\n  }\n\n  .strongman-image {\n    align-self: flex-start;\n    width: 70%;\n    margin-left: -10%;\n  }\n\n  .talk-bubble {\n    align-self: flex-end;\n  }\n\n  .talktext p {\n    font-size: 170%;\n    line-height: 30px;\n  }\n\n  .app-image {\n    width: 80%;\n    align-self: center;\n    margin-bottom: -10%;\n    z-index: 10;\n    max-width: 60%;\n  }\n\n  .image-text-wrapper {\n    overflow: hidden;\n    background-color: #f3f3f3;\n    padding-top: 50px;\n    padding-bottom: 24px;\n  }\n\n  .image-text-wrapper > div {\n    color: #0c629c;\n    font-size: 20px;\n    text-align: center;\n    width: 100%;\n    font-weight: bold;\n    letter-spacing: 2px;\n  }\n\n  .happy-image {\n    width: 100%;\n    align-self: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvcGFnZS1iZWZvcmUtZm9ybS9wYWdlLWJlZm9yZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWdlLWJlZm9yZS1mb3JtL3BhZ2UtYmVmb3JlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLG9CQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FEREE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDSUY7O0FEREE7RUFDRTtJQUNFLDhCQUFBO0lBQ0EsaUJBQUE7RUNJRjs7RURGQTtJQUNFLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VDS0Y7O0VESEE7SUFDRSxvQkFBQTtFQ01GOztFREhBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDTUY7O0VESEE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VDTUY7O0VESkE7SUFDRSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ09GOztFRExBO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VDUUY7O0VETkE7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUNTRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1iZWZvcmUtZm9ybS9wYWdlLWJlZm9yZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU1MDZmO1xufVxuLmJlZm9yZS1mb3JtLXBhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3Ryb25nbWFuLWltYWdlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG59XG4udGFsay1idWJibGUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnRhbGt0ZXh0IHAge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5hcHAtaW1hZ2Uge1xuICB3aWR0aDogODAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC0xOTJweDtcbiAgei1pbmRleDogMTA7XG4gIG1heC13aWR0aDogNDAlO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmJlZm9yZS1mb3JtLXBhZ2Uge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgfVxuICAuc3Ryb25nbWFuLWltYWdlIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIH1cbiAgLnRhbGstYnViYmxlIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuXG4gIC50YWxrdGV4dCBwIHtcbiAgICBmb250LXNpemU6IDE3MCU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAuYXBwLWltYWdlIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTAlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIG1heC13aWR0aDogNjAlO1xuICB9XG4gIC5pbWFnZS10ZXh0LXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgfVxuICAuaW1hZ2UtdGV4dC13cmFwcGVyID4gZGl2IHtcbiAgICBjb2xvcjogIzBjNjI5YztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cbiAgLmhhcHB5LWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNTA2Zjtcbn1cblxuLmJlZm9yZS1mb3JtLXBhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdHJvbmdtYW4taW1hZ2Uge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogLTEwJTtcbn1cblxuLnRhbGstYnViYmxlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi50YWxrdGV4dCBwIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uYXBwLWltYWdlIHtcbiAgd2lkdGg6IDgwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtMTkycHg7XG4gIHotaW5kZXg6IDEwO1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5iZWZvcmUtZm9ybS1wYWdlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gIH1cblxuICAuc3Ryb25nbWFuLWltYWdlIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIH1cblxuICAudGFsay1idWJibGUge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG5cbiAgLnRhbGt0ZXh0IHAge1xuICAgIGZvbnQtc2l6ZTogMTcwJTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5hcHAtaW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IC0xMCU7XG4gICAgei1pbmRleDogMTA7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gIH1cblxuICAuaW1hZ2UtdGV4dC13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIH1cblxuICAuaW1hZ2UtdGV4dC13cmFwcGVyID4gZGl2IHtcbiAgICBjb2xvcjogIzBjNjI5YztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cblxuICAuaGFwcHktaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/page-before-form/page-before-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/page-before-form/page-before-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageBeforeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBeforeFormComponent", function() { return PageBeforeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PageBeforeFormComponent = class PageBeforeFormComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http
            .get('assets/text/page-before-form-text.txt', { responseType: 'text' })
            .subscribe(data => (this.text = data));
        this.http
            .get('assets/text/page-before-form-text-2.txt', { responseType: 'text' })
            .subscribe(data => (this.text2 = data));
        this.screenWidth = window.innerWidth;
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
    }
};
PageBeforeFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], PageBeforeFormComponent.prototype, "getScreenSize", null);
PageBeforeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-before-form',
        template: __webpack_require__(/*! raw-loader!./page-before-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/page-before-form/page-before-form.component.html"),
        styles: [__webpack_require__(/*! ./page-before-form.component.scss */ "./src/app/pages/page-before-form/page-before-form.component.scss")]
    })
], PageBeforeFormComponent);



/***/ }),

/***/ "./src/app/pages/second-page/second-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/second-page/second-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkmark-text-wrapper {\n  height: 100%;\n  color: white;\n  font-size: 30px;\n  min-height: 800px;\n  background-image: url('app-sample-tilted.png');\n  background-repeat: no-repeat;\n  background-size: auto;\n  background-position: right;\n  word-spacing: 3px;\n}\n\n.wrapper {\n  background-color: #3f9bbf;\n}\n\nmat-icon {\n  font-size: 35px;\n}\n\n@media all and (max-width: 1000px) {\n  .checkmark-text-wrapper {\n    width: 100%;\n    height: 100%;\n    padding: 48px 24px;\n    color: white;\n    font-size: 25px;\n    min-height: 600px;\n    background-image: url('app-sample-tilted.png');\n    background-repeat: no-repeat;\n    background-size: auto;\n    background-position: bottom;\n    word-spacing: 3px;\n  }\n\n  mat-icon {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvc2Vjb25kLXBhZ2Uvc2Vjb25kLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlY29uZC1wYWdlL3NlY29uZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRERBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLDhDQUFBO0lBQ0EsNEJBQUE7SUFDQSxxQkFBQTtJQUNBLDJCQUFBO0lBQ0EsaUJBQUE7RUNJRjs7RURGQTtJQUNFLGVBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vjb25kLXBhZ2Uvc2Vjb25kLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2ttYXJrLXRleHQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXBwLXNhbXBsZS10aWx0ZWQucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIHdvcmQtc3BhY2luZzogM3B4O1xufVxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5YmJmO1xufVxubWF0LWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmNoZWNrbWFyay10ZXh0LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA0OHB4IDI0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXBwLXNhbXBsZS10aWx0ZWQucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIHdvcmQtc3BhY2luZzogM3B4O1xuICB9XG4gIG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbiIsIi5jaGVja21hcmstdGV4dC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWluLWhlaWdodDogODAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXBwLXNhbXBsZS10aWx0ZWQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICB3b3JkLXNwYWNpbmc6IDNweDtcbn1cblxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5YmJmO1xufVxuXG5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jaGVja21hcmstdGV4dC13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogNDhweCAyNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hcHAtc2FtcGxlLXRpbHRlZC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIHdvcmQtc3BhY2luZzogM3B4O1xuICB9XG5cbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/second-page/second-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/second-page/second-page.component.ts ***!
  \************************************************************/
/*! exports provided: SecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function() { return SecondPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecondPageComponent = class SecondPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
SecondPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-second-page',
        template: __webpack_require__(/*! raw-loader!./second-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/second-page/second-page.component.html"),
        styles: [__webpack_require__(/*! ./second-page.component.scss */ "./src/app/pages/second-page/second-page.component.scss")]
    })
], SecondPageComponent);



/***/ }),

/***/ "./src/app/pages/sixth-page/sixth-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/sixth-page/sixth-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: #3f9bbf;\n}\n\n.sixth-page {\n  color: white;\n  overflow: hidden;\n}\n\n.strongman-image {\n  align-self: flex-end;\n  width: 66%;\n  margin-right: -14.5%;\n}\n\n.talktext p {\n  font-size: 40px;\n}\n\n.text-below-title {\n  text-align: right;\n}\n\n@media all and (max-width: 1000px) {\n  .sixth-page {\n    padding: 48px 0px;\n  }\n\n  .strongman-image {\n    align-self: flex-end;\n    width: 66%;\n    margin-right: -14.5%;\n  }\n\n  .talktext p {\n    font-size: 170%;\n    line-height: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvc2l4dGgtcGFnZS9zaXh0aC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaXh0aC1wYWdlL3NpeHRoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsaUJBQUE7RUNHRjs7RURBQTtJQUNFLG9CQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0VDR0Y7O0VEQUE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2l4dGgtcGFnZS9zaXh0aC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5YmJmO1xufVxuLnNpeHRoLXBhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdHJvbmdtYW4taW1hZ2Uge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDY2JTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTQuNSU7XG59XG5cbi50YWxrdGV4dCBwIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLnRleHQtYmVsb3ctdGl0bGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5zaXh0aC1wYWdlIHtcbiAgICBwYWRkaW5nOiA0OHB4IDBweDtcbiAgfVxuXG4gIC5zdHJvbmdtYW4taW1hZ2Uge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA2NiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTQuNSU7XG4gIH1cblxuICAudGFsa3RleHQgcCB7XG4gICAgZm9udC1zaXplOiAxNzAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB9XG59XG4iLCIud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjliYmY7XG59XG5cbi5zaXh0aC1wYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3Ryb25nbWFuLWltYWdlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiA2NiU7XG4gIG1hcmdpbi1yaWdodDogLTE0LjUlO1xufVxuXG4udGFsa3RleHQgcCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnRleHQtYmVsb3ctdGl0bGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5zaXh0aC1wYWdlIHtcbiAgICBwYWRkaW5nOiA0OHB4IDBweDtcbiAgfVxuXG4gIC5zdHJvbmdtYW4taW1hZ2Uge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA2NiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTQuNSU7XG4gIH1cblxuICAudGFsa3RleHQgcCB7XG4gICAgZm9udC1zaXplOiAxNzAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/sixth-page/sixth-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/sixth-page/sixth-page.component.ts ***!
  \**********************************************************/
/*! exports provided: SixthPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SixthPageComponent", function() { return SixthPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SixthPageComponent = class SixthPageComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http
            .get('assets/text/sixth-page-text.txt', { responseType: 'text' })
            .subscribe(data => (this.text = data));
    }
};
SixthPageComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SixthPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sixth-page',
        template: __webpack_require__(/*! raw-loader!./sixth-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sixth-page/sixth-page.component.html"),
        styles: [__webpack_require__(/*! ./sixth-page.component.scss */ "./src/app/pages/sixth-page/sixth-page.component.scss")]
    })
], SixthPageComponent);



/***/ }),

/***/ "./src/app/pages/terms/terms.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/terms/terms.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 3.5em;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 94px;\n}\n\n.back-button {\n  position: absolute;\n  top: 98px;\n  z-index: 9999;\n  color: #ee506f;\n  margin: 0 auto;\n  display: flex;\n}\n\nmat-icon {\n  font-size: 40px;\n  line-height: 40px;\n}\n\n.subtitle {\n  font-size: 1.75em;\n  margin: 24px 0px;\n  font-weight: bolder;\n}\n\n.subtitle-2 {\n  font-size: 1.5em;\n  text-decoration: underline;\n  margin: 12px 0;\n}\n\n@media screen and (max-width: 1000px) {\n  .wrapper {\n    padding: 96px 0px;\n  }\n\n  .title {\n    font-size: 2em;\n    margin-bottom: 24px;\n  }\n\n  .desktop-wrapper {\n    width: calc(100vw - 48px);\n  }\n\n  .back-button {\n    top: 91px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDSUY7O0FEREE7RUFDRTtJQUNFLGlCQUFBO0VDSUY7O0VERkE7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7RUNLRjs7RURIQTtJQUNFLHlCQUFBO0VDTUY7O0VESkE7SUFDRSxTQUFBO0VDT0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogOTRweDtcbn1cbi5iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5OHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBjb2xvcjogI2VlNTA2ZjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuNzVlbTtcbiAgbWFyZ2luOiAyNHB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnN1YnRpdGxlLTIge1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAud3JhcHBlciB7XG4gICAgcGFkZGluZzogOTZweCAwcHg7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG4gIC5kZXNrdG9wLXdyYXBwZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDhweCk7XG4gIH1cbiAgLmJhY2stYnV0dG9uIHtcbiAgICB0b3A6IDkxcHg7XG4gIH1cbn1cbiIsIi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDk0cHg7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5OHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBjb2xvcjogI2VlNTA2ZjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG4gIG1hcmdpbjogMjRweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5zdWJ0aXRsZS0yIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbjogMTJweCAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIHBhZGRpbmc6IDk2cHggMHB4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgLmRlc2t0b3Atd3JhcHBlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0OHB4KTtcbiAgfVxuXG4gIC5iYWNrLWJ1dHRvbiB7XG4gICAgdG9wOiA5MXB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/terms/terms.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ts ***!
  \************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/texts */ "./src/app/texts.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TermsComponent = class TermsComponent {
    constructor(router) {
        this.router = router;
        this.termsTexts = src_app_texts__WEBPACK_IMPORTED_MODULE_2__["TERMS"];
        this.cookiesTitle = src_app_texts__WEBPACK_IMPORTED_MODULE_2__["COOKIES_TITLE"];
    }
    ngOnInit() { }
    goBack() {
        this.router.navigate(['']);
    }
};
TermsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__(/*! raw-loader!./terms.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/terms/terms.component.html"),
        styles: [__webpack_require__(/*! ./terms.component.scss */ "./src/app/pages/terms/terms.component.scss")]
    })
], TermsComponent);



/***/ }),

/***/ "./src/app/pages/testimonials/testimonials.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/testimonials/testimonials.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testimonials > div {\n  font-size: 60px;\n  text-align: center;\n}\n\n.image-container {\n  width: 100%;\n}\n\nimg {\n  border-radius: 5px;\n  min-width: 100%;\n  max-width: 500px;\n  border: 2px solid #0c629c;\n  width: 100%;\n}\n\n@media all and (max-width: 1000px) {\n  .testimonials {\n    padding: 48px 0px;\n    width: calc(100vw - 48px);\n  }\n\n  .testimonials > div {\n    font-size: 32px;\n  }\n\n  .image-container {\n    max-width: 500px;\n  }\n\n  img {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSx5QkFBQTtFQ0VGOztFREFBO0lBQ0UsZUFBQTtFQ0dGOztFRERBO0lBQ0UsZ0JBQUE7RUNJRjs7RURGQTtJQUNFLFdBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0aW1vbmlhbHMgPiBkaXYge1xuICBmb250LXNpemU6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYzYyOWM7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnRlc3RpbW9uaWFscyB7XG4gICAgcGFkZGluZzogNDhweCAwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0OHB4KTtcbiAgfVxuICAudGVzdGltb25pYWxzID4gZGl2IHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIudGVzdGltb25pYWxzID4gZGl2IHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYzYyOWM7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnRlc3RpbW9uaWFscyB7XG4gICAgcGFkZGluZzogNDhweCAwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0OHB4KTtcbiAgfVxuXG4gIC50ZXN0aW1vbmlhbHMgPiBkaXYge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuXG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/testimonials/testimonials.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/testimonials/testimonials.component.ts ***!
  \**************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestimonialsComponent = class TestimonialsComponent {
    constructor() { }
    ngOnInit() {
        this.getScreenSize();
    }
    getScreenSize(event) {
        this.screenWidth = window.innerWidth;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], TestimonialsComponent.prototype, "getScreenSize", null);
TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testimonials',
        template: __webpack_require__(/*! raw-loader!./testimonials.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/testimonials/testimonials.component.html"),
        styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/pages/testimonials/testimonials.component.scss")]
    })
], TestimonialsComponent);



/***/ }),

/***/ "./src/app/pages/third-page/third-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/third-page/third-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  background-color: #ee506f;\n}\n\n.third-page {\n  color: white;\n}\n\n.strongman-image {\n  align-self: flex-start;\n  width: 55%;\n}\n\n.talk-bubble {\n  align-self: flex-start;\n}\n\n.talktext p {\n  font-size: 40px;\n  line-height: 43px;\n}\n\n@media all and (max-width: 1000px) {\n  .third-page {\n    padding: 48px 0px;\n  }\n\n  .strongman-image {\n    align-self: flex-start;\n    width: 55%;\n  }\n\n  .talk-bubble {\n    align-self: flex-end;\n  }\n\n  .talktext p {\n    font-size: 166%;\n    line-height: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25lbWFuamEvRG9jdW1lbnRzL2FuZ3VsYXItcHJvamVjdHMvdHJhaW4tbWUtb25saW5lL3NyYy9hcHAvcGFnZXMvdGhpcmQtcGFnZS90aGlyZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90aGlyZC1wYWdlL3RoaXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEREE7RUFDRSxzQkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FESEE7RUFDRTtJQUNFLGlCQUFBO0VDTUY7O0VESkE7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUNPRjs7RURMQTtJQUNFLG9CQUFBO0VDUUY7O0VETEE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNRRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGhpcmQtcGFnZS90aGlyZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU1MDZmO1xufVxuLnRoaXJkLXBhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3Ryb25nbWFuLWltYWdlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgd2lkdGg6IDU1JTtcbn1cbi50YWxrLWJ1YmJsZSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4udGFsa3RleHQgcCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnRoaXJkLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDQ4cHggMHB4O1xuICB9XG4gIC5zdHJvbmdtYW4taW1hZ2Uge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDU1JTtcbiAgfVxuICAudGFsay1idWJibGUge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG5cbiAgLnRhbGt0ZXh0IHAge1xuICAgIGZvbnQtc2l6ZTogMTY2JTtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxufVxuIiwiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU1MDZmO1xufVxuXG4udGhpcmQtcGFnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0cm9uZ21hbi1pbWFnZSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA1NSU7XG59XG5cbi50YWxrLWJ1YmJsZSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi50YWxrdGV4dCBwIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDNweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC50aGlyZC1wYWdlIHtcbiAgICBwYWRkaW5nOiA0OHB4IDBweDtcbiAgfVxuXG4gIC5zdHJvbmdtYW4taW1hZ2Uge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDU1JTtcbiAgfVxuXG4gIC50YWxrLWJ1YmJsZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cblxuICAudGFsa3RleHQgcCB7XG4gICAgZm9udC1zaXplOiAxNjYlO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/third-page/third-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/third-page/third-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ThirdPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPageComponent", function() { return ThirdPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ThirdPageComponent = class ThirdPageComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http
            .get('assets/text/third-page-text.txt', { responseType: 'text' })
            .subscribe(data => (this.text = data));
    }
};
ThirdPageComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ThirdPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-third-page',
        template: __webpack_require__(/*! raw-loader!./third-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/third-page/third-page.component.html"),
        styles: [__webpack_require__(/*! ./third-page.component.scss */ "./src/app/pages/third-page/third-page.component.scss")]
    })
], ThirdPageComponent);



/***/ }),

/***/ "./src/app/services/mail.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/mail.service.ts ***!
  \******************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MailService = class MailService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.userExists = false;
    }
    send(form) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"] + 'outside_api/register', form).subscribe(res => {
            this.http
                .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["serverUrl"] + 'auth/login', {
                email: form.email,
                password: form.password
            })
                .subscribe(res2 => {
                location.href = `https://moj-trening.com/autologin/${form.email}`;
            });
        }, () => {
            this.userExists = true;
        });
    }
};
MailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MailService);



/***/ }),

/***/ "./src/app/texts.ts":
/*!**************************!*\
  !*** ./src/app/texts.ts ***!
  \**************************/
/*! exports provided: COOKIES_TITLE, TERMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COOKIES_TITLE", function() { return COOKIES_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMS", function() { return TERMS; });
const COOKIES_TITLE = `Kolačići (cookies)`;
const TERMS = [
    {
        title: `Sadržaj i Usluga sajta`,
        text: `Usluga koju pruža Sajt „strongmanmetod.online“ je online personalni trening koji se izrađuje prema Vašem zahtevu a na
    osnovu ličnih podataka koje sami unesete. Informacije koje pružate kada koristite sajt treba da su tačne i
    potpune, kao i e-mail adresa, preko koje ostvarujemo komunikaciju i otvaramo Vam nalog na Trainerize aplikacije preko koje dobijate
    trening i komunicirate sa Strongmanom u vezi treninga
    , putem e-mail-a možete dobiti i dodatne
    korisne informacije. Cena personalnog treninga je dostupna i vidljiva na
    sajtu, a plaćanje je moguće vršiti jednokratno(unapred) ili se možete pretplatiti na personalni trening, odnosno uplatu vršiti mesečno.
    Klijent nema pravo da štampa i kopira informacije sa sajta na neki drugi sajt ili za neku drugu upotrebu osim lične.
    Sajt ne bi trebalo da koriste maloletna lica, odnosno mlađi od 18 godina, u tom slučaju treba da postoji
    odobrenje odgovornog punoletnog lica.
    Sajt ne bi trebalo da koriste lica koja imaju zdravstvene ili nutritivne probleme, u tom slučaju
    treba konsultovati svog lekara i javiti se putem mejla timu korisničkog servisa sajta.`
    },
    {
        title: `Politika privatnosti`,
        subtexts: [
            {
                title: `Zaštita privatnosti korisnika`,
                text: `Svako prikupljanje, obradu i čuvanje Vaših podataka uradićemo u skladu
        sa važećim propisima Republike Srbije i novom evropskom regulativom o zaštiti podataka o ličnosti.
        U ime Sajta "dijeta.info“ obavezujemo se da ćemo čuvati privatnost svih naših kupaca. Prikupljamo
        samo neophodne, osnovne podatke o korisnicima i podatke neophodne za poslovanje i informisanje korisnika
        u skladu sa dobrim poslovnim običajima i u cilju pružanja kvalitetne usluge. Svi podaci o korisnicima se
        strogo čuvaju i dostupni su samo zaposlenima kojima su ti podaci nužni za obavljanje posla. Svi zaposleni na
        Sajtu „dijeta.info“ odgovorni su za poštovanje načela zaštite privatnosti.`
            },
            {
                title: `Zaštita poverljivih podataka`,
                text: `Ukoliko odlučite da platite online našu uslugu, najvažnije je znati da plaćanje na našem
        Internet sajtu obavljate na siguran način, bez ikakvog rizika za Vas i bez mogućnosti
         zloupotrebe podataka i Vaše platne kartice, (VISA, MasterCard i Maestro) Plaćanje platnim
          karticama se obavlja preko procesora 2Checkout.com Inc. (Ohio, USA) ili preko PayPal-a, po vašem izboru.
        Prilikom plaćanja karticom putem interneta, unos podataka o kartici se vrši na zaštićenoj stranici
        2Checkout.com Inc. (Ohio, USA). Sigurnost podataka prilikom plaćanja karticama, garantuje procesor
        platnih kartica na čijim stranicama se obavlja ceo proces plaćanja. Ni jednog trenutka Sajt „dijeta.info"
        nema pristup podacima sa Vaše platne kartice, pa samim tim ni ne može biti odgovoran za njihovu eventualnu zloupotrebu.
        Prilikom unošenja podataka o platnoj kartici, poverljive informacija se prenose putem javne mreže u zaštićenoj
        (kriptovanoj) formi upotrebom SSL protokola.
        Sigurnost podataka prilikom kupovine, garantuje procesor platnih kartica, 2Checkout.com Inc. (Ohio, USA) ili PayPal,
        pa se tako kompletan proces naplate obavlja na stranicama procesora plaćanja. Ni jednog trenutka podaci o platnoj
        kartici nisu dostupni našem sistemu.
        Lični podaci koje budete unosili u odgovarajuće forme koristiće se isključivo u svrhu evidentiranja radi izrade plana
        ishrane i neće se prosleđivati niti ustupati drugom licu ili instituciji.
        Svi podaci koje nam ostavljate tokom procesa popunjavanja ankete su samo za našu internu upotrebu, a sa svrhom
        isporučivanja zatraženog proizvoda, i neće biti nikada predočena trećim licima osim u slučaju sudske odluke nadležnog suda.`
            },
            {
                title: COOKIES_TITLE,
                text: `Kolačići su tekstualne datoteke smeštene na vaš računar za prikupljanje standardih
        informacija internet dnevnika i informacije o ponašanju posetioca. Informacije se koriste
        za praćenje korišćenja web stranice i izradu statističkih izveštaja o web aktivnosti. Za dodatne
        informacije o kolačićima posetite www.aboutcookies.org ili www.allaboutcookies.org. Možete podesiti
        vaš browser da ne prihvata kolačiće i gore navedene web stranice će vam reći kako ukloniti kolačiće iz
        vašeg browser-a. Međutim, u nekoliko slučajeva neke od naših web stranica možda neće funkcionisati ako
        uklonite kolačiće iz vašeg browsera.
        Korišćenje naših servisa podrazumeva saglasnost korisnika sa svim navedenim na ovoj strani. Sajt „dijeta.info"
        se obavezuje da će se pridržavati svega navedenog, a sve promene uslova postaju važeće tek nakon objavljivanja
        na ovoj strani. Sajt „dijeta.info" zadržava pravo da unosi izmene u ova Pravila zaštite privatnosti. U slučaju da
        sajt „dijeta.info“ unese materijalnu izmenu u ova Pravila zaštite privatnosti, ona će biti navedena ovde. Preporučujemo
        vam da redovno posećujete ovu stranicu jer ako nastavite da koristite ovaj Sajt nakon unošenja bilo kakvih izmena u
        Pravila zaštite privatnosti, na taj način izražavate svoju saglasnost sa unetim izmenama.`
            }
        ]
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, serverUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverUrl", function() { return serverUrl; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const serverUrl = 'https://api.train-me.online/api/';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nemanja/Documents/angular-projects/train-me-online/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map