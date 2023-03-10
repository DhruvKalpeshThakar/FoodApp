interface Meal {
    id: string;
    categoryIds: any;
    title: string;
    affordability: string;
    complexity: string;
    imageUrl: string;
    duration: number;
    ingredients: string[];
    isHealthy: boolean;
    isVegetarian: boolean;
}

class Meal {
    constructor(id: string,
        categoryIds: any,
        title: string,
        affordability: string,
        complexity: string,
        imageUrl: string,
        duration: number,
        ingredients: string[],
        isHealthy: boolean,
        isVegetarian: boolean
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.isHealthy = isHealthy;
        this.isVegetarian = isVegetarian;
    }
}

export default Meal;