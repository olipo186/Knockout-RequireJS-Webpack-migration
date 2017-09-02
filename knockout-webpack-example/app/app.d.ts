// Makes it possible for us to import html templates with TypeScript
declare module "*.html" {
    const content: string;
    export default content;
}