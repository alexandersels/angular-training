import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Recipe} from '../../shared/models/recipe.model';

@Injectable()
export class RecipeAddService {

  constructor(private afs: AngularFirestore) {
  }

  async addRecipe(recipe: Recipe): Promise<void> {
    const id = this.afs.createId();
    recipe.id = id;

    try {
      await this.afs.collection('recipes').doc(id).set(recipe.asObject);
    } catch (error) {
      console.log(error);
    }
  }
}
