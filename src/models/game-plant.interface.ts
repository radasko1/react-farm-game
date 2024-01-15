export interface GamePlant {
    id: string; // game_object_(crop_name)
    label: string;
    buyPrice: number;
    sellPrice: number;
    experience: number;
    requiredLevel: number;
    growTime: number; // seconds
    imageUrl: string;
}