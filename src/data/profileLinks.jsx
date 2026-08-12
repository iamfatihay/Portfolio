import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LiaXing } from "react-icons/lia";

/*
 * One source for the profile links used by the hero rail and the footer.
 *
 * The icons are inline SVG rather than icon-font classes on purpose. The old
 * markup carried `uil-linkedin-alt` / `uil-twitter-alt` class names, which are
 * exactly what content blockers' generic cosmetic filters match on — with the
 * rail hidden, the hero grid collapsed. Inline SVG leaves no matchable name in
 * the DOM, and it also drops two icon glyphs from the CDN font request.
 */
const profileLinks = [
    {
        key: "in",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/fatih-ay1661/",
        Icon: FaLinkedinIn,
    },
    {
        key: "gh",
        label: "GitHub",
        href: "https://github.com/iamfatihay",
        Icon: FaGithub,
    },
    {
        key: "x",
        label: "X",
        href: "https://twitter.com/Fatih__AY",
        Icon: FaXTwitter,
    },
    {
        key: "xg",
        label: "Xing",
        href: "https://www.xing.com/profile/Fatih_AY033127/cv",
        Icon: LiaXing,
    },
];

export default profileLinks;
