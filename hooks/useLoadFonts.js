import { useFonts } from "expo-font";
import { SFProFontFamily } from "@/config/customFont";

export default function useLoadFonts() {
  const [fontsLoaded] = useFonts({
    // SF Pro Display
    [SFProFontFamily.SF_PRO_DISPLAY_BLACK]: require("../assets/fonts/SF-Pro-Display-Black.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_BLACK_ITALIC]: require("../assets/fonts/SF-Pro-Display-BlackItalic.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_BOLD]: require("../assets/fonts/SF-Pro-Display-Bold.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_BOLD_ITALIC]: require("../assets/fonts/SF-Pro-Display-BoldItalic.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_HEAVY]: require("../assets/fonts/SF-Pro-Display-Heavy.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_HEAVY_ITALIC]: require("../assets/fonts/SF-Pro-Display-HeavyItalic.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_LIGHT]: require("../assets/fonts/SF-Pro-Display-Light.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_LIGHT_ITALIC]: require("../assets/fonts/SF-Pro-Display-LightItalic.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_MEDIUM]: require("../assets/fonts/SF-Pro-Display-Medium.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_MEDIUM_ITALIC]: require("../assets/fonts/SF-Pro-Display-MediumItalic.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_REGULAR]: require("../assets/fonts/SF-Pro-Display-Regular.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_REGULAR_ITALIC]: require("../assets/fonts/SF-Pro-Display-RegularItalic.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_SEMIBOLD]: require("../assets/fonts/SF-Pro-Display-Semibold.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_SEMIBOLD_ITALIC]: require("../assets/fonts/SF-Pro-Display-SemiboldItalic.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_THIN]: require("../assets/fonts/SF-Pro-Display-Thin.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_THIN_ITALIC]: require("../assets/fonts/SF-Pro-Display-ThinItalic.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_ULTRALIGHT]: require("../assets/fonts/SF-Pro-Display-Ultralight.ttf"),
    [SFProFontFamily.SF_PRO_DISPLAY_ULTRALIGHT_ITALIC]: require("../assets/fonts/SF-Pro-Display-UltralightItalic.ttf"),

    // SF Pro Text
    [SFProFontFamily.SF_PRO_TEXT_BOLD]: require("../assets/fonts/SF-Pro-Text-Bold.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_BOLD_ITALIC]: require("../assets/fonts/SF-Pro-Text-BoldItalic.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_HEAVY]: require("../assets/fonts/SF-Pro-Text-Heavy.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_HEAVY_ITALIC]: require("../assets/fonts/SF-Pro-Text-HeavyItalic.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_LIGHT]: require("../assets/fonts/SF-Pro-Text-Light.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_LIGHT_ITALIC]: require("../assets/fonts/SF-Pro-Text-LightItalic.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_MEDIUM]: require("../assets/fonts/SF-Pro-Text-Medium.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_MEDIUM_ITALIC]: require("../assets/fonts/SF-Pro-Text-MediumItalic.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_REGULAR]: require("../assets/fonts/SF-Pro-Text-Regular.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_REGULAR_ITALIC]: require("../assets/fonts/SF-Pro-Text-RegularItalic.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_SEMIBOLD]: require("../assets/fonts/SF-Pro-Text-Semibold.ttf"),
    [SFProFontFamily.SF_PRO_TEXT_SEMIBOLD_ITALIC]: require("../assets/fonts/SF-Pro-Text-SemiboldItalic.ttf"),
  });
  return fontsLoaded;
}
