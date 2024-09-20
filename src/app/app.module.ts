import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DisplayHelloWorldComponent } from "./components/display-hello-world/display-hello-world.component";
import { ShowhellobuttonComponent } from "./components/showhellobutton/showhellobutton.component";
import { DisplaynameComponent } from "./components/displayname/displayname.component";
import { FormsModule } from "@angular/forms";
import { CounterComponent } from "./components/counter/counter.component";
import { SimpleformComponent } from "./components/simpleform/simpleform.component";
import { UserageComponent } from "./components/userage/userage.component";
import { UsergreetingComponent } from "./components/usergreeting/usergreeting.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { TextlengthComponent } from "./components/textlength/textlength.component";
import { CurrencyconverterComponent } from "./components/currencyconverter/currencyconverter.component";
import { EvenoddcheckerComponent } from "./components/evenoddchecker/evenoddchecker.component";
import { WordreverserComponent } from "./components/wordreverser/wordreverser.component";
import { ShowdateComponent } from "./components/showdate/showdate.component";
import { ShowusernameComponent } from "./components/showusername/showusername.component";
import { MultiplicationtableComponent } from "./components/multiplicationtable/multiplicationtable.component";
import { SimpleloginComponent } from "./components/simplelogin/simplelogin.component";
import { FahrenheittocelsiusComponent } from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import { BookmarklistComponent } from "./components/bookmarklist/bookmarklist.component";
import { CharactercounterComponent } from "./components/charactercounter/charactercounter.component";
import { PalindromecheckerComponent } from "./components/palindromechecker/palindromechecker.component";
import { TemperatureconverterComponent } from "./components/temperatureconverter/temperatureconverter.component";
import { ShoppinglistComponent } from "./components/shoppinglist/shoppinglist.component";
import { FactorialcalculatorComponent } from "./components/factorialcalculator/factorialcalculator.component";
import { TodomanagerComponent } from "./components/todomanager/todomanager.component";
import { GuessnumbergameComponent } from "./components/guessnumbergame/guessnumbergame.component";


const routes: Routes = [
    {path: '',  component: DisplayHelloWorldComponent},
    {path: 'showhellobutton', component: ShowhellobuttonComponent},
    {path: 'displayname', component: DisplaynameComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'simpleform', component: SimpleformComponent},
    {path: 'userage', component: UserageComponent},
    {path: 'usergreeting', component: UsergreetingComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'textlength', component: TextlengthComponent},
    {path: 'currencyconverter', component: CurrencyconverterComponent},
    {path: 'evenoddchecker', component: EvenoddcheckerComponent},
    {path: 'wordreverser', component: WordreverserComponent},
    {path: 'showdate', component: ShowdateComponent},
    {path: 'showusername', component: ShowusernameComponent},
    {path: 'multiplicationtable', component: MultiplicationtableComponent},
    {path: 'simplelogin', component: SimpleloginComponent},
    {path: 'fahrenheittocelsius', component: FahrenheittocelsiusComponent},
    {path: 'bookmarklist', component: BookmarklistComponent},
    {path: 'charactercounter', component: CharactercounterComponent},
    {path: 'palindromechecker', component: PalindromecheckerComponent},
    {path: 'temperatureconverter', component: TemperatureconverterComponent},
    {path: 'shoppinglist', component: ShoppinglistComponent},
    {path: 'factorialcalculator', component: FactorialcalculatorComponent},
    {path: 'todomanager', component: TodomanagerComponent},
    {path: 'guessnumbergame', component: GuessnumbergameComponent},
]

@NgModule ({
    imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
    ],

    declarations: [
        AppComponent,
        DisplayHelloWorldComponent,
        ShowhellobuttonComponent,
        DisplaynameComponent,
        CounterComponent,
        SimpleformComponent,
        UserageComponent,
        UsergreetingComponent,
        CalculatorComponent,
        TextlengthComponent,
        CurrencyconverterComponent,
        EvenoddcheckerComponent,
        WordreverserComponent,
        ShowdateComponent,
        ShowusernameComponent,
        MultiplicationtableComponent,
        SimpleloginComponent,
        FahrenheittocelsiusComponent,
        BookmarklistComponent,
        CharactercounterComponent,
        PalindromecheckerComponent,
        TemperatureconverterComponent,
        ShoppinglistComponent,
        FactorialcalculatorComponent,
        TodomanagerComponent,
        GuessnumbergameComponent,
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}