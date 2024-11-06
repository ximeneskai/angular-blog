import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  photoCover: string = "https://cdn.pixabay.com/photo/2016/09/19/21/50/sun-flower-1681385_640.jpg"
  cardTitle: string = "TESTE"
  cardText: string = "TESTE"
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null): void {
    if (id === null) {
      console.error('ID não encontrado na URL!');
      return;
    }

    const result = dataFake.filter(article => article.id === id);

    if (result.length > 0) {
      const article = result[0]; 
      this.cardTitle = article.title;
      this.cardText = article.text;
      this.photoCover = article.photoCover;
    } else {
      console.error('Artigo não encontrado!');
    }
  }
}
