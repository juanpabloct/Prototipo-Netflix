export interface ProfileReducer{
    profiles: Profiles[]
    profileSelected: ProfileSelected
}
export interface Profiles{
    nombrePerfil: string;
    caratula: string;
}
export interface ProfileSelected {
    nombrePerfil: string;
    caratula: string;
}