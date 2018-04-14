import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';




@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {

  }

  storeRecipes() {
    const req = new HttpRequest(
      'PUT', 'https://bg-recipe-book-d020e.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {reportProgress: true});

    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>(
      'https://bg-recipe-book-d020e.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingrdients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {

          this.recipeService.setRecipes(recipes);
        }
      );
  }


}
