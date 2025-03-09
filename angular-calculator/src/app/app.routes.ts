import { Routes } from '@angular/router';
import { CalculatorComponent } from "./components/calculator/calculator.component"
import { AboutComponent } from "./pages/about/about.component";

export const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'about', component: AboutComponent }
];
