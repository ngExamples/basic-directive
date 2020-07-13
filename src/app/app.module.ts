import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "app/app.component"
import { HighlightDirective } from "core/highlight.directive"

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, HighlightDirective ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
