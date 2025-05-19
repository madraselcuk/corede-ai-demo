export interface LogoConfig {
    position: string;
    logoSvg: string;
    blur: number;
    innerShadow: boolean;
    shadowDirection?: string;
    fillOpacity?: string;
    id: string;
}

export const logoConfigurations: LogoConfig[] = [
    {
        position: "absolute left-72 h-[151px] top-[493px] w-[175px]",
        logoSvg: "vercel-logotype-light 1",
        blur: 10,
        innerShadow: false,
        id: "vercel"
    },
    {
        position: "absolute h-[151px] left-[434px] top-[414px] w-[175px]",
        logoSvg: "google",
        blur: 10,
        innerShadow: true,
        id: "google1"
    },
    {
        position: "absolute h-[151px] left-[145px] top-[82px] w-[175px]",
        logoSvg: "",
        blur: 10,
        innerShadow: true,
        shadowDirection: "top",
        id: "empty1"
    },
    {
        position: "absolute h-[151px] left-[291px] top-[164px] w-[175px]",
        logoSvg: "x-logo",
        blur: 10,
        innerShadow: true,
        fillOpacity: "0.04",
        id: "x-logo"
    },
    {
        position: "absolute left-72 h-[151px] top-[330px] w-[175px]",
        logoSvg: "",
        blur: 10,
        innerShadow: true,
        id: "empty2"
    },
    {
        position: "absolute h-[151px] left-[435px] top-[250px] w-[175px]",
        logoSvg: "google",
        blur: 10,
        innerShadow: true,
        id: "google2"
    },
    {
        position: "absolute left-0 h-[151px] top-[327px] w-[175px]",
        logoSvg: "square",
        blur: 5,
        innerShadow: true,
        id: "square"
    },
    {
        position: "absolute left-0.5 h-[151px] top-[164px] w-[175px]",
        logoSvg: "",
        blur: 10,
        innerShadow: true,
        shadowDirection: "top",
        id: "empty3"
    },
    {
        position: "absolute left-0 h-[151px] top-[494px] w-[175px]",
        logoSvg: "",
        blur: 10,
        innerShadow: false,
        id: "empty4"
    },
    {
        position: "absolute h-[151px] left-[434px] top-[81px] w-[175px]",
        logoSvg: "google",
        blur: 10,
        innerShadow: true,
        id: "google3"
    }
]; 