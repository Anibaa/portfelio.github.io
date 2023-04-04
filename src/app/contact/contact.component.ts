import { Component } from '@angular/core';
import { faPhone, faMapLocationDot, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  phone= faPhone
  location =faLocationDot
  mail=faEnvelope
  linkedin=faLinkedin

}
