export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on your blog information ',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2800/2800015.png',
        aiPrompt:'Give me 5 blog topic title  in bullet wise only based on given nice topic and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                

            },

        ]

    },
    
    {
        name:'Blog Content',
        desc:'An AI tool that serve  as your personal blogs post title writer , generating catchy and viral worthy titles in your choosen language',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/9079/9079294.png',
        aiPrompt:'Generate Blog Content based on  topic and outline the important information',
        slug:'blog-content-generation',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                

            },

        ]

    },
    
    {
        name:'Blog Topic Ideas',
        desc:'An AI tool that serve  as your personal blogs post title writer , generating catchy and viral worthy blog ideas in your choosen language ',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        aiPrompt:'Generate me 5 blog topic idea  in bullet wise only (no description) based on niche in Rich text editor format',
        slug:'blog-topic-idea',
        form:[
            {
                label:'Enter your  niche',
                field:'input',
                name:'niche',
                required:true
            },
            
            

        ]

    },
    
    {
        name:'Youtube SEO Title',
        desc:'An AI tool that serve  as your personal blogs post title writer , generating catchy and viral worthy youtube seo title in your choosen language  ',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt:'Give me best SEO optimizied high ranked 5  title ideas  in bullet wise only based on given nice topic and give me result in Rich text editor format',
        slug:'youtube-seo-tools',
        form:[
            {
                label:'Enter your  youtube video topic keywords',
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label:'Enter youtube description outline here ',
                field:'textarea',
                name:'outline',
                

            },

        ]

    },
    
    {
        name:'Youtube description',
        desc:'An AI tool that serve as a personal blog topic ideas ',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt:'Generate youtube description with emojis under 4-5 sentences ',
        slug:'blog-topic-idea',
        form:[
            {
                label:'Enter your  blog topic/title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter youtube outline here ',
                field:'textarea',
                name:'outline',
                

            },

        ]

    },
    
    {
        name:'Youtube Tags',
        desc:'An AI tool that serve  as your personal blogs post title writer , generating catchy and viral worthy titles in your choosen language  ',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/3938/3938026.png',
        aiPrompt:'Give me 10 youtube tags   in bullet wise only based on given nice topic and give me result in Rich text editor format',
        slug:'youtube-tags',
        form:[
            {
                label:'Enter your yotube title',
                field:'input',
                name:'tag',
                required:true
            },
            {
                label:'Enter youtube video outline here(Optional)',
                field:'textarea',
                name:'outline',
                

            },

        ]

    },
    
    {
        name:'Rewrite Article(Plagirism Free)',
        desc:'Use this tool to rewrite the existing article/blog post which can bypass  AI detectors and also give relevant field  ',
        category:'Rewrite  Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/15870/15870975.png',
        aiPrompt:'Rewrite give article without any plagarism ',
        slug:'rewrite-article',
        form:[
            {
                label:'Provide your article/blogpost or any other content plagarism freee',
                field:'textarea',
                name:'article',
                required:true
            },
            {
                label:'Enter your topic title',
                field:'textarea',
                name:'outline',
                

            },

        ]

    },
    
    {
        name:'Text Improver',
        desc:'An AI tool that enhances your writing by improving clarity, tone, and flow—perfect for refining emails, articles, or creative content to make it more engaging and polished ',
        category:'Text Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/2800/2800039.png',
        aiPrompt:'Give this text a better version by making it clearer, smoother, and more engaging without changing its meaning',
        slug:'text-improver',
        form:[
            {
                label:'Enter your Text that need to improve',
                field:'input',
                name:'text',
                required:true
            },
            {
                label:'Enter text title',
                field:'textarea',
                name:'outline',
                

            },

        ]

    },
    
    {
        name:'Add Emojis to Text',
        desc:'An AI tool that serve as a personal blog topic ideas ',
        category:'Emoji to Text',
        icon:'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        aiPrompt:'Give this text relevant emojis to make it more expressive and fun',
        slug:'emojis-to-text',
        form:[
            
            {
                label:'Enter text ',
                field:'textarea',
                name:'outline',
                

            },

        ]

    },
    

    {
        name:'Instagram Hash Tag Generator',
        desc:'An AI-powered tool that helps you generate creative, engaging Instagram posts in seconds ',
        category:'Instagram Hashtag Generator',
        icon:'https://cdn-icons-png.flaticon.com/128/5109/5109610.png',
        
        aiPrompt:'Give creative and engaging Instagram Hash Tag  ideas tailored to my theme or topic.',
        slug:'instagram hashtag ',
        form:[
            {
                label:'Enter keyword for your post',
                field:'input',
                name:'tag',
                required:true
            },
            

        ]

    }
    

]