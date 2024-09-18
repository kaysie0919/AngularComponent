import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DisplayHelloWorldComponent } from "./components/display-hello-world/display-hello-world.component";


const routes: Routes = [
    {path: '',  component: DisplayHelloWorldComponent},
]

@NgModule ({
    imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true})
    ],

    declarations: [
        AppComponent,
        DisplayHelloWorldComponent,
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}