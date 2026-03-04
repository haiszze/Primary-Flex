
export const Platform = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const DeviceInfo = {
    
}

export class PlatformUtil{
    static sm(): boolean{
        const width = window.innerWidth;
        return width < Platform.sm;
    }

    static md(): boolean{
        const width = window.innerWidth;
        return width >= Platform.md;
    }

    static lg(): boolean{
        const width = window.innerWidth;
        return width >= Platform.lg;
    }

    static xl(): boolean{
        const width = window.innerWidth;
        return width >= Platform.xl;
    }

    static "2xl"(): boolean{
        const width = window.innerWidth;
        return width >= Platform["2xl"];
    }

    static mobile(): boolean{
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

}