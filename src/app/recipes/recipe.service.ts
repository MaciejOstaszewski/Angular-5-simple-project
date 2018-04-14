import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
  //   new Recipe('Salmon', 'Salmon Roasted in Butter',
  //     'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
  //     [
  //       new Ingredient('Salmon', 1),
  //       new Ingredient('Butter', 1)
  //     ]),
  //
  //   new Recipe('Parsnip', 'Parsnip, mushroom & barley wreath',
  //     'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/11/wreath.jpg?itok=Bf2RM8Br',
  //     [
  //       new Ingredient('Cheese', 2),
  //       new Ingredient('Mushrooms', 5)
  //     ]),
  //
  //   new Recipe('Meatballs', 'The Best Swedish Meatballs',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Gfut9l0FUbDGc_TySOjfRqgLkh2JbKax6a-3PZSbplj0lbi5',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('Sauce', 1)
  //     ]),
     ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());

  }

}
