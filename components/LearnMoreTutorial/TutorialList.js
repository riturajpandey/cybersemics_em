var tutorial = [
    {
        id: "0",
        title: "If the same thought appears in more than one place, em shows a small number to the right of the thought, for example: ",
        description: "Let's see this in action",
        descriptionOnFalse: "",
        descriptionOnTrue: "",
        goToNext: true
    }, {
        id: "1",
        title: "For this tutorial, choose what kind of content you want to create. You will learn the same command regardless of which one you choose.",
        description: "",
        descriptionOnFalse: "",
        descriptionOnTrue: "",
        goToNext: false
    },
    {
        id: "2",
        title: "Let's begin! Create a new thought with the text “Home”.",
        description: "You should create this thought at the top level, i.e. not within any other thoughts.",
        descriptionOnFalse: "",
        descriptionOnTrue: "",
        goToNext: false,
        showHint: false,
        hint2: `Hit the Enter key to create a new thought. Then type "Home".`,
        hint1: ""
    },
    {
        id: "3",
        title: `Let's say that you want to make a list of things you have to do at home. Add a thought with the text "To Do" within “Home”.`,
        description: "Do you remember how to do it?",
        descriptionOnFalse: "",
        descriptionOnTrue: "",
        goToNext: false,
        showHint: false,
        hint2: `Hold Ctrl and hit Enter to create a new thought within "Home". Then type "To Do".`,
        hint1: `Select "Home".`
    },
    {
        id: "4",
        title: "Now add a thought to “To Do”. This could be any task you'd like to get done.",
        description: "Do you remember how to do it?.",
        descriptionOnFalse: "",
        descriptionOnTrue: "Click the Next button when you are done entering your thought.",
        goToNext: false,
        showHint: false,
        hint2: `Hold Ctrl and hit Enter to create a new thought within "To Do".`,
        hint1: `Select "To Do". `
    },
    {
        id: "5",
        title: `Now we are going to create a different "To Do" list.`,
        description: `Create a new thought with the text “Work” after "Home" (but at the same level).`,
        descriptionOnFalse: "",
        descriptionOnTrue: "",
        goToNext: false,
        showHint: false,
        hint1: `Select "Home."`,
        hint2: `Hit the Enter key to create a new thought after "Home". Then type "Work".`
    },
    {
        id: "6",
        title: `Now add a thought with the text "To Do" within “Work”.`,
        description: "Do you remember how to do it?.",
        descriptionOnFalse: "",
        descriptionOnTrue: "",
        goToNext: false,
        showHint: false,
        hint2: `Hold Ctrl and hit Enter to create a new thought within "Work".`,
        hint1: `Select "Work". `
    },
    {
        id: "7",
        title: `Notice the small number (2). This means that “To Do” appears in 2 places, or contexts (in our case "Home" and "Work").`,
        description: "Imagine a new work task. Add it to this “To Do” list.",
        descriptionOnFalse: "",
        descriptionOnTrue: "",
        goToNext: false,
        showHint: false,
        hint2: `Hold Ctrl and hit Enter to create a new thought within "To Do"`,
        hint1: `Select "To Do".`
    },
    {
        id: "8",
        title: "Now I'm going to show you the keyboard shortcut to view multiple contexts.",
        description: `First select "To Do"`,
        descriptionOnFalse: "",
        descriptionOnTrue: "",
        goToNext: false
    },
    {
        id: "9",
        title: "Congratulations... You have completed Part I of this tutorial.You know the basics of creating thoughts in em",
        description: "How are you feeling?Would you like to learn more or play on your own.",
        descriptionOnFalse: "",
        descriptionOnTrue: "",
        goToNext: true
    },
];
export default tutorial;

