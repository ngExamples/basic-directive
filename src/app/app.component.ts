import { Component } from "@angular/core";
import { User } from "app/user"

@Component({
    selector: 'app-root',
    template: `
    <h1>{{title}}</h1>
    <p>Known users</p>
    <ul style="width: min-content;">
        <li *ngFor="let user of users" [highlight]="user.color" >
            {{ user.name }}
        </li>
    </ul>
    `
})
export class AppComponent {
    title: string = "System Users";

    users: User[] = [
        new User(1, "Jermey", 'red'),
        new User(2, "Katkot", 'green'),
        new User(3, "Muhammad", 'cyan'),
        new User(4, "Tamer", 'purple')
    ];
}