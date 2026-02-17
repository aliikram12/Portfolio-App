import { motion } from 'framer-motion';
import { 
  Code2, Palette, Users, MessageCircle, 
  Brain, Clock, HandshakeIcon, Lightbulb 
} from 'lucide-react';

// Skill icons as SVG components for authenticity
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

const skillIcons: Record<string, React.FC<IconProps>> = {
  HTML: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  CSS: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  ),
  JavaScript: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.625-1.065-2.773-.975-1.213.105-2.287.72-2.854 1.635-.675 1.087-.525 2.52.345 3.39.75.75 1.845 1.125 2.865 1.41.72.195 1.2.48 1.11.99-.09.57-.66.87-1.455.795-.63-.06-1.215-.27-1.605-.69l-1.77 1.02c.42.525 1.02.99 1.89 1.245 1.305.375 2.79.09 3.615-.945.525-.675.615-1.53.39-2.49zm-6.24-3.69c-1.215 0-2.19-.36-2.895-1.065l-.015 3.195 1.02.585c.675.39 1.53.585 2.37.585 1.305 0 2.46-.36 3.195-1.08.675-.66.93-1.59.75-2.505-.195-.975-.93-1.575-2.07-1.725-.63-.075-1.26.045-1.815.33l-.93.525.015-2.625 1.02-.585c.675-.39 1.53-.585 2.37-.585 1.305 0 2.46.36 3.195 1.08.675.66.93 1.59.75 2.505-.195.975-.93 1.575-2.07 1.725-.63.075-1.26-.045-1.815-.33l-.93-.525v2.625z"/>
    </svg>
  ),
  Bootstrap: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.324 0 2.086-.624 2.086-1.776 0-1.168-.776-1.572-2.197-1.572zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.93 16.278h-4.08c-.13 0-.23-.1-.23-.23V7.922c0-.13.1-.23.23-.23h3.858c1.974 0 3.236.888 3.236 2.532 0 1.26-.696 2.088-1.836 2.424v.062c1.428.294 2.292 1.194 2.292 2.628 0 1.86-1.368 2.94-3.47 2.94z"/>
    </svg>
  ),
  Tailwind: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  ),
  PHP: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.01 10.71h1.85c.42 0 .76.08 1.03.25.27.17.4.44.4.81 0 .26-.06.52-.18.78-.12.26-.3.48-.54.66-.24.18-.54.27-.9.27H7.01v-2.77zm-2.01 6.25h3.87c.86 0 1.61-.17 2.26-.52.65-.35 1.15-.82 1.5-1.41.35-.59.53-1.25.53-1.97 0-.65-.16-1.24-.47-1.77-.31-.53-.76-.95-1.33-1.26-.57-.31-1.24-.47-2-.47H7.01V7.46H5v9.5zm10.99-3.25h1.85c.42 0 .76.08 1.03.25.27.17.4.44.4.81 0 .26-.06.52-.18.78-.12.26-.3.48-.54.66-.24.18-.54.27-.9.27h-1.66v-2.77zm-2.01 6.25h3.87c.86 0 1.61-.17 2.26-.52.65-.35 1.15-.82 1.5-1.41.35-.59.53-1.25.53-1.97 0-.65-.16-1.24-.47-1.77-.31-.53-.76-.95-1.33-1.26-.57-.31-1.24-.47-2-.47h-1.76V7.46H14v9.5z"/>
    </svg>
  ),
  MySQL: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.14 2.5c-.6 0-1.1.1-1.5.3-.4.2-.7.5-.9.9-.2.4-.3.8-.3 1.3 0 .5.1.9.3 1.3.2.4.5.7.9.9.4.2.9.3 1.5.3.6 0 1.1-.1 1.5-.3.4-.2.7-.5.9-.9.2-.4.3-.8.3-1.3 0-.5-.1-.9-.3-1.3-.2-.4-.5-.7-.9-.9-.4-.2-.9-.3-1.5-.3zm0 .8c.4 0 .8.1 1.1.2.3.1.5.4.7.7.2.3.2.7.2 1.1 0 .4-.1.8-.2 1.1-.2.3-.4.5-.7.7-.3.2-.7.2-1.1.2-.4 0-.8-.1-1.1-.2-.3-.1-.5-.4-.7-.7-.2-.3-.2-.7-.2-1.1 0-.4.1-.8.2-1.1.2-.3.4-.5.7-.7.3-.2.7-.2 1.1-.2zM6.5 8v8h1.2v-3.4h2.6c.7 0 1.3-.2 1.7-.6.4-.4.6-.9.6-1.5 0-.6-.2-1.1-.6-1.5-.4-.4-1-.6-1.7-.6H6.5zm1.2.8h2.4c.4 0 .7.1.9.4.2.2.3.5.3.9 0 .4-.1.7-.3.9-.2.2-.5.4-.9.4H7.7V8.8zm7.3 0v.8h2.8v6.4h1.2V9.6h2.8v-.8h-6.8z"/>
    </svg>
  ),
  React: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.857-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.405-1.282-.66-1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146z"/>
    </svg>
  ),
  NodeJS: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.45 1.7.45 1.38 0 2.17-.84 2.17-2.3V8.03c0-.12-.1-.22-.22-.22H7.5c-.13 0-.23.1-.23.22v8.35c0 .65-.67 1.3-1.77.75L3.42 16c-.1-.06-.16-.16-.16-.27V7.15c0-.11.06-.22.16-.28l7.44-4.3c.1-.05.22-.05.31 0l7.44 4.3c.1.06.16.17.16.28v8.58c0 .11-.06.22-.16.27l-7.44 4.3c-.1.06-.22.06-.31 0l-1.89-1.1c-.08-.05-.19-.06-.27-.02-.74.38-1.01.45-1.51.45-.52 0-1.03-.2-1.39-.55l-1.95-1.13c-.48-.28-.78-.8-.78-1.36v-4.3c0-.56.3-1.08.78-1.36l1.95-1.12c.36-.21.8-.21 1.17 0l1.95 1.12c.48.28.78.8.78 1.36v3.4c0 .12.1.22.22.22h.78c.12 0 .22-.1.22-.22v-3.4c0-.56-.3-1.08-.78-1.36l-1.95-1.12c-.47-.27-1.06-.27-1.53 0l-1.95 1.12c-.48.28-.78.8-.78 1.36v4.3c0 .56.3 1.08.78 1.36l1.95 1.12c.54.32 1.2.48 1.86.48.62 0 1.24-.14 1.84-.48l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z"/>
    </svg>
  ),
  Express: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.702l-2.48-4.88-2.48 4.88a1.529 1.529 0 11-2.727-1.388l3.094-6.094-3.094-6.094a1.529 1.529 0 112.727-1.388l2.48 4.88 2.48-4.88a1.529 1.529 0 112.727 1.388l-3.094 6.094 3.094 6.094a1.529 1.529 0 01-1.337 2.09zM.279 17.723V6.277h1.529v10.588h5.494v1.529H.279v.329z"/>
    </svg>
  ),
  MongoDB: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
    </svg>
  ),
  Git: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.652 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.678-1.342-.396-2.009L7.611 3.527 4.647 6.491c-.603.605-.603 1.585 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l6.232-6.227c.605-.603.605-1.582 0-2.187z"/>
    </svg>
  ),
  Vue: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
    </svg>
  ),
  Frappe: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.88 0C1.29 0 0 1.29 0 2.88v18.24C0 22.71 1.29 24 2.88 24h18.24c1.59 0 2.88-1.29 2.88-2.88V2.88C24 1.29 22.71 0 21.12 0H2.88zM6 6h12v2H6V6zm0 5h10v2H6v-2zm0 5h8v2H6v-2z"/>
    </svg>
  ),
  DSA: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  Illustrator: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm7.4 15.5H6.3V6.7h2.1v10.1zm7.2-7.5c0 1.8-.9 2.8-2.6 2.8h-1.3v3.4H9.6V6.7h3.6c1.7 0 2.6.9 2.6 2.6h.8zm-2.4 1.3c.6 0 .9-.3.9-.9v-1.5c0-.6-.3-.9-.9-.9h-1.3v3.3h1.3z"/>
    </svg>
  ),
  Photoshop: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm7.4 15.5H6.3V6.7h2.1v10.1zm7.2-3.3c0 1.8-.9 2.8-2.6 2.8h-1.3v3.4H9.6V6.7h3.6c1.7 0 2.6.9 2.6 2.6v1.6zm-2.4 1.3c.6 0 .9-.3.9-.9v-1.5c0-.6-.3-.9-.9-.9h-1.3v3.3h1.3z"/>
    </svg>
  ),
  InDesign: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm6.4 15.5H5.3V6.7h2.1v10.1zm7.2-7.5c0 1.8-.9 2.8-2.6 2.8h-1.3v3.4H8.6V6.7h3.6c1.7 0 2.6.9 2.6 2.6h.8zm-2.4 1.3c.6 0 .9-.3.9-.9v-1.5c0-.6-.3-.9-.9-.9h-1.3v3.3h1.3z"/>
    </svg>
  ),
  XD: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm5.8 15.5L4.2 12l2.6-4.8h2.5L6.6 12l2.7 4.8H6.8zm8.6 0h-2.3l-2.6-4.8 2.6-4.8h2.3L13 12l2.4 4.8z"/>
    </svg>
  ),
  Figma: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51c-1.665 0-3.019 1.355-3.019 3.019s2.014 3.019 4.049 3.019c1.724 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.098-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
    </svg>
  ),
};

const Skills: React.FC = () => {
  const developmentSkills = [
    { name: 'HTML', icon: 'HTML', color: '#E34F26' },
    { name: 'CSS', icon: 'CSS', color: '#1572B6' },
    { name: 'JavaScript', icon: 'JavaScript', color: '#F7DF1E' },
    { name: 'Bootstrap', icon: 'Bootstrap', color: '#7952B3' },
    { name: 'Tailwind CSS', icon: 'Tailwind', color: '#06B6D4' },
    { name: 'PHP', icon: 'PHP', color: '#777BB4' },
    { name: 'MySQL', icon: 'MySQL', color: '#4479A1' },
    { name: 'React', icon: 'React', color: '#61DAFB' },
    { name: 'Node.js', icon: 'NodeJS', color: '#339933' },
    { name: 'Express.js', icon: 'Express', color: '#000000' },
    { name: 'MongoDB', icon: 'MongoDB', color: '#47A248' },
    { name: 'Frappe UI', icon: 'Frappe', color: '#0089FF' },
    { name: 'Git/GitHub', icon: 'Git', color: '#F05032' },
    { name: 'Vue.js', icon: 'Vue', color: '#4FC08D' },
    { name: 'DSA with C++', icon: 'DSA', color: '#00599C' },
  ];

  const designSkills = [
    { name: 'Adobe Illustrator', icon: 'Illustrator', color: '#FF9A00' },
    { name: 'Photoshop', icon: 'Photoshop', color: '#31A8FF' },
    { name: 'InDesign', icon: 'InDesign', color: '#FF3366' },
    { name: 'Adobe XD', icon: 'XD', color: '#FF61F6' },
    { name: 'Figma', icon: 'Figma', color: '#F24E1E' },
  ];

  const softSkills = [
    { name: 'Communication', icon: MessageCircle, color: '#8B5CF6' },
    { name: 'Teamwork', icon: Users, color: '#EC4899' },
    { name: 'Problem Solving', icon: Brain, color: '#3B82F6' },
    { name: 'Time Management', icon: Clock, color: '#10B981' },
    { name: 'Adaptability', icon: Lightbulb, color: '#F59E0B' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="min-h-full px-4 py-8 particle-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full glass-card text-sm text-purple-400 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            My Expertise
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I&apos;ve mastered to bring ideas to life.
          </p>
        </motion.div>

        {/* Development Skills */}
        <motion.section
          className="mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <Code2 className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Development Skills</h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {developmentSkills.map((skill) => {
              const IconComponent = skillIcons[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  className="glass-card p-3 md:p-4 flex flex-col items-center gap-2 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -4,
                    borderColor: skill.color,
                  }}
                >
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent 
                      className="w-8 h-8 md:w-10 md:h-10 transition-colors" 
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <span className="text-xs md:text-sm text-center font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Design Skills */}
        <motion.section
          className="mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20">
              <Palette className="w-6 h-6 text-pink-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Design Skills</h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {designSkills.map((skill) => {
              const IconComponent = skillIcons[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  className="glass-card p-3 md:p-4 flex flex-col items-center gap-2 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -4,
                    borderColor: skill.color,
                  }}
                >
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent 
                      className="w-8 h-8 md:w-10 md:h-10 transition-colors" 
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <span className="text-xs md:text-sm text-center font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Soft Skills */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-green-500/20">
              <HandshakeIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Soft Skills</h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="glass-card p-3 md:p-4 flex flex-col items-center gap-2 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -4,
                    borderColor: skill.color,
                  }}
                >
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${skill.color}20` }}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon 
                      className="w-6 h-6 md:w-8 md:h-8" 
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <span className="text-xs md:text-sm text-center font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;
