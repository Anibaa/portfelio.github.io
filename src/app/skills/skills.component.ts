import { Component } from '@angular/core';
import { faHtml5, faCss3 , faJs , faAngular} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  HTML5=faHtml5
  css = faCss3
  js = faJs
  angular = faAngular

}
