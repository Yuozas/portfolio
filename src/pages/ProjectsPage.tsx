import React, { useState } from 'react';
import {
    Heading,
    Text,
    Container,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    SimpleGrid,
    AspectRatio,
} from '@chakra-ui/react';
import {
    ArtworkGallery,
    GitHubRepoCard,
    ModelViewer, Project, ReactProjectPreview
} from "../components/ProjectPreviews";

const ProjectsPage: React.FC = () => {
    const [category, setCategory] = useState('programming');

    return (
        <Container maxW="container.xl" py={8}>
            <Heading as="h1" size="2xl" mb={6}>My Projects</Heading>

            <Tabs onChange={(index) => setCategory(['programming', 'multimedia'][index])} mb={6}>
                <TabList>
                    <Tab>🧠 Programming</Tab>
                    <Tab>🎨 Multimedia</Tab>
                </TabList>
            </Tabs>

            {category === 'programming' && (
                <Tabs>
                    <TabList>
                        <Tab>🌐 Web Development</Tab>
                        <Tab>🎮 Game Development</Tab>
                        <Tab>Other Programming</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Project
                                    title="React ASCII Character Cube Rotator ⬛  (Latest)"
                                    description="A fun React code I wrote inspired by a YouTube video. There's plenty of math here 🤯, be wary 🤭."
                                    embed={<ReactProjectPreview sandboxId="s6x7cj" githubRepo="Yuozas/React_Cube_Rotator" title="React Cube Rotator" module="%2Fsrc%2FApp.js"/>}
                                />
                                <Project
                                    title="My Portfolio Site 👋🧑  (Latest)"
                                    description="This is the site you are currently on. I hope you like it 😊❤"
                                    embed={<GitHubRepoCard repo="Yuozas/Portfolio" />}
                                />
                                <Project
                                    title="Job Application Challenge ⏩👩‍💻"
                                    description="This was my first job application challenge after graduating and looking for a job."
                                    embed={<GitHubRepoCard repo="Yuozas/CognizantChallange" />}
                                />
                                {/* Add more web development projects */}
                            </SimpleGrid>
                        </TabPanel>

                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Project
                                    title="Kaberei Warrior ⚔"
                                    description="This is a 2D RPG platformer Unity Demo Game I created as a 3rd-year student. It has some unpolished features like getting stuck in walls when pressed to move, mobs dying oddly, and a buggy boss. The landing and jumping mechanics were intentionally made uncomfortable to represent a more realistic approach to jumping, with an uncomfortable delay. This game feels clunky and served as a good lesson that realism doesn't always equate to fun gameplay. There's a similar jumping concept in Jump King, which I wasn't aware of at the time, and it's equally, if not more, frustrating."
                                    embed={<GitHubRepoCard repo="Yuozas/Kaberei-Warrior" />}
                                    build="builds/unity-builds/Kaberei Warrior.zip"
                                />
                                <Project
                                    title="Agent Classified 🔫😎"
                                    description="This is a 2D top-down bullet dodge Demo Game that I created as a student."
                                    embed={<GitHubRepoCard repo="Yuozas/Agent-Classified" />}
                                    build="builds/unity-builds/Agent Classified.zip"
                                />
                                <Project
                                    title="Unity Multiplayer Horror Game 😨👻😱 (Latest)"
                                    description="This is a Unity multiplayer game I'm developing with my friend on a private Euphelia repo. It's in a very early stage, and we haven't done much yet."
                                    embed={<GitHubRepoCard repo="Yuozas/darker-darkness-darkens-unity-early-preview" />}
                                />
                                <Project
                                    title="Unity Single Player Story Game 📚️ (Latest)"
                                    description="This is a Unity single-player game I was developing with my friend on a private Euphelia repo. It's in a very early stage, and we've temporarily shelved the idea."
                                    embed={<GitHubRepoCard repo="Yuozas/yume-preview" />}
                                />
                                <Project
                                    title="Unity Chess Game ♟"
                                    description="This was my first game made in Unity after graduating. I enjoyed playing chess, so I decided to create one myself using Unity without relying on any existing algorithms, just my own logic. It was also made with the thought that it might help me land a job in game development. You can try it out on Itch.io; the web version has some text bugs and doesn't display properly."
                                    link="https://im-yuzo.itch.io/chess"
                                    linkName="Try it out on Itch.io"
                                    embed={<GitHubRepoCard repo="Yuozas/Chess-Unity-Csharp" />}
                                />
                                <Project
                                    title="Luna Online Rebuild ❤"
                                    description="Luna Online/Luna Plus was my favorite MMORPG that I played on gPotato most of my free time from when I was 9 until I was about 15 years old. It was taken down, which broke my heart, and I always dreamed of creating my private server. I managed to retrieve the source code and different builds from various publishers and build the game to play between my local computers, but that wasn't enough. Those builds had serious issues that I wanted to fix to maintain a more original version from when it was hosted on official servers, not private ones. That's why I planned to rebuild this C++ code to the latest C++ version and latest DirectX version. I even considered rebuilding it in .NET because the game isn't that resource-intensive to run since it's old, so it wouldn't be much of a performance bottleneck. .NET code would've been so much more readable. I spent many days analyzing the code and making some changes. I still wish to complete the idea of reviving and rebuilding this game one day."
                                    embed={<GitHubRepoCard repo="Yuozas/Luna-Online" />}
                                />
                                <Project
                                    title="SwiftLocator NuGet Library 🔎"
                                    description="This is a 'Dependency Injection', 'Service Locator' library I wrote for Euphelia (my game dev team). It was designed for better 'Unity Game Engine' code."
                                    embed={<GitHubRepoCard repo="Euphelia-Interactive/SwiftLocator" />}
                                />
                                <Project
                                    title="SwiftMicrophone Library 🎙"
                                    description="This is a microphone library I wrote to implement in Euphelia's 3D Multiplayer Unity horror game. We would've used 'Dissonance' instead if it wasn't too expensive for a hobby indie game team."
                                    embed={<GitHubRepoCard repo="Euphelia-Interactive/SwiftMicrophone" />}
                                />
                                <Project
                                    title="2D Space Game for GameJam 2019 🚀"
                                    description="This is a screen capture of the game that I made in one day with my friend for the GameJam in Lithuania while I was still a student."
                                    embed={
                                        <AspectRatio ratio={16 / 9}>
                                            <iframe
                                                src="https://www.youtube.com/embed/To6gIP0Qw7o"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </AspectRatio>
                                    }
                                />
                                {/* Add more game development projects */}
                            </SimpleGrid>
                        </TabPanel>

                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Project
                                    title="Handy Tool for Programming - NoHeadache ⌨  (Latest)"
                                    description="I don't go a single day without using this Windows app I wrote for myself. This app automatically converts top number row characters to symbols. This way, I don't need to use shift to type symbols when programming. For numbers, I use the numpad, or if I have only a MINI keyboard, I use shift to type numbers instead."
                                    embed={<GitHubRepoCard repo="Yuozas/NoHeadache" />}
                                />
                                <Project
                                    title="Handy Tool for Retrieving My Owned Games - GameLister 🎮🔎"
                                    description="I have about 5 different Steam game accounts, so I wanted to create an app that retrieves all my owned games from the Steam API so that I can easily browse through them, preventing me from buying a game I already own."
                                    embed={<GitHubRepoCard repo="Yuozas/GameLister" />}
                                />
                                <Project
                                    title=".NET UDP Microphone 🎤👩‍💻  (Latest)"
                                    description="This was done to test out and start writing a microphone data recorder, sender, and receiver, which later turned into the SwiftMicrophone library that I used in the horror game Unity Engine Multiplayer game."
                                    embed={<GitHubRepoCard repo="Euphelia-Interactive/UDPMicrophone" />}
                                />
                                <Project
                                    title="Instagram Post Crawlerbot 🧠"
                                    description="I created this for my friend when I was a student. This is a Python script for an Instagram WebCrawler. It retrieves a random winner, which is handy for picking a random winner for a giveaway lottery."
                                    embed={<GitHubRepoCard repo="Yuozas/Simple-Instagram-Post-Crawler" />}
                                />
                                {/* Add more programming projects */}
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            )}

            {category === 'multimedia' && (
                <Tabs>
                    <TabList>
                        <Tab>🎲 3D Models</Tab>
                        <Tab>🎥 Videos</Tab>
                        <Tab>🖼 Artwork</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Project
                                    title="Skull 💀"
                                    description="I sculpted this skull in ZBrush during my student days."
                                    embed={<ModelViewer modelUrl="3d-models/Kaukule_Higher poly.glb" />}
                                />
                                <Project
                                    title="Dark Souls 3 Dark Knight Great Axe 🪓"
                                    description="I modeled this in Autodesk Maya during my student days."
                                    embed={<ModelViewer modelUrl="3d-models/Black_Knight_Great_Axe_for_ZBrush_normal_poly.glb" />}
                                />
                                {/* Add more 3D model projects */}
                            </SimpleGrid>
                        </TabPanel>

                        <TabPanel>
                            <Text mb={4}>Please be cautious, I'm embarrassed by how much vulgar language I used in my student year videos. But it was made for comedic purposes, I guess 😬.</Text>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Project
                                    title="Policionierius The Movie 🚓🔫"
                                    description="This is a video I made with friends. It's a comedic show about a cop and a bandit. We had horrible microphone quality, so don't judge the audio quality too much 😋."
                                    embed={
                                        <AspectRatio ratio={16 / 9}>
                                            <iframe
                                                src="https://www.youtube.com/embed/Ie281C-92ys"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </AspectRatio>
                                    }
                                />
                                <Project
                                    title="Pickle Gag Advertisement 🥒🤭"
                                    description="I made this as a joke advertisement for a Lithuanian brand of pickles, using ASMR girls and some adult-oriented jokes. For obvious reasons, I kept this video unlisted 😅."
                                    embed={
                                        <AspectRatio ratio={16 / 9}>
                                            <iframe
                                                src="https://www.youtube.com/embed/598g9AWiWu4"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </AspectRatio>
                                    }
                                />
                                <Project
                                    title="Rain Collection Gag Advertisement 🌧"
                                    description="I was asked to create a video of this kind for my video editing lecture as homework."
                                    embed={
                                        <AspectRatio ratio={16 / 9}>
                                            <iframe
                                                src="https://www.youtube.com/embed/VLdF4OTLJv0"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </AspectRatio>
                                    }
                                />
                                <Project
                                    title="Rotating Still Person 🔢😎"
                                    description="I was asked to create a video of the legendary Matrix effect, where the camera rotates around a still or almost still person, for my video editing lecture. During the lesson, it took me about 30 minutes to film and edit. The video would've been better with more footage, but it's still nice."
                                    embed={
                                        <AspectRatio ratio={16 / 9}>
                                            <iframe
                                                src="https://www.youtube.com/embed/f6TWw_AtPlI"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </AspectRatio>
                                    }
                                />
                                <Project
                                    title="Skibidi 💃"
                                    description="I made this for my video editing lecture during the lesson. It took me about 1 hour to film and edit. Please watch with caution as it contains vulgar language and is generally not for viewing by those of sound mind. I liked to joke around just like any other normal student 😅."
                                    embed={<AspectRatio ratio={16 / 9}>
                                        <iframe
                                            src="https://www.youtube.com/embed/VaWW9y4FXl0"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </AspectRatio>
                                    }
                                />
                                <Project
                                    title="Dream 😴"
                                    description="I made this for my video editing lecture during the lesson. I don't remember exactly how long it took to film and edit 😁. Please watch with caution as it contains vulgar language. The task was to create a video where I had to use certain cuts specified by the lecturer."
                                    embed={
                                        <AspectRatio ratio={16 / 9}>
                                            <iframe
                                                src="https://www.youtube.com/embed/B3lRToGs3uI"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </AspectRatio>
                                    }
                                />
                                <Project
                                    title="Random Scenario 🏃‍♀️"
                                    description="I created this for my video editing lecture during the lesson. I don't remember exactly how long it took to film and edit 😁. Please watch with caution as it contains vulgar language. The task was to create a video where I had to use certain cuts specified by the lecturer."
                                    embed={
                                        <AspectRatio ratio={16 / 9}>
                                            <iframe
                                                src="https://www.youtube.com/embed/MacfwUunCJo"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </AspectRatio>
                                    }
                                />
                                {/* Add more video projects */}
                            </SimpleGrid>
                        </TabPanel>

                        <TabPanel>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Project
                                    title="Skull Sketch 💀"
                                    description="My digital still life sketch I created in Photoshop using my graphics tablet."
                                    embed={<ArtworkGallery images={[{ src: "drawings/4K SKULL N STUFF.png", alt: "Skull" }]}/>}
                                />
                                <Project
                                    title="Elf Girl with Fairies 🧚‍♀️🧝‍♀️"
                                    description="A digital art piece I created in Photoshop using my graphics tablet. It's very much unfinished, but it's still nice."
                                    embed={<ArtworkGallery images={[{ src: "drawings/Elf_Girl_makeup_3.png", alt: "Elf Girl" }]}/>}
                                />
                                <Project
                                    title="Chibi Girl Sketch 👧"
                                    description="A digital art sketch I created in Photoshop using my graphics tablet. I love sketching anime 🥰."
                                    embed={<ArtworkGallery images={[{ src: "drawings/day_1 manga character.png", alt: "Chibi Girl" }]}/>}
                                />
                                <Project
                                    title="My Pixel Art Collection 🎮🎨"
                                    description="A collection of my pixel art that I created for games and other projects just for fun."
                                    embed={
                                        <ArtworkGallery
                                            images={[
                                                { src: "drawings/pixel-art/MePlayingWithChar.gif", alt: "Char GIF" },
                                                { src: "drawings/pixel-art/SizeTest.png", alt: "Size Test" },
                                                { src: "drawings/pixel-art/Astronautas PixelArt Wallpaper.png", alt: "Astronaut" },
                                                { src: "drawings/pixel-art/Yuzo 160x160.png", alt: "Yuzo" },
                                            ]}
                                        />
                                    }
                                />
                                <Project
                                    title="Cat Girl 👯‍♂️ - Censored ⭐"
                                    description="Two digital art pieces for the same concept - a cat girl. One was drawn on PC with a graphics tablet, the other on my phone."
                                    embed={
                                        <ArtworkGallery
                                            images={[
                                                { src: "drawings/cat-girl/cat girl on phone censored.png", alt: "Cat girl Phone" },
                                                { src: "drawings/cat-girl/cat girl pc censored.png", alt: "Cat girl PC" },
                                                { src: "drawings/cat-girl/cat girl pc face.png", alt: "Cat girl PC face" },
                                            ]}
                                        />
                                    }
                                />
                                <Project
                                    title="My Quick Digital Sketches ⏩"
                                    description="A collection of my digital art and sketches created using Photoshop and my graphics tablet in an hour or a couple."
                                    embed={
                                        <ArtworkGallery
                                            images={[
                                                { src: "drawings/digital-sketch-collection/Art_Gallery_Day_1_Sketch.png", alt: "Art Gallery" },
                                                { src: "drawings/digital-sketch-collection/Resting_Sketch_Day_1.png", alt: "Resting Sketch" },
                                                { src: "drawings/digital-sketch-collection/Warmup_3.png", alt: "Warmup" },
                                            ]}
                                        />
                                    }
                                />
                                <Project
                                    title="My Old Digital Sketches ⌛"
                                    description="A collection of my old digital art and sketches created using Photoshop and my pen tablet."
                                    embed={
                                        <ArtworkGallery
                                            images={[
                                                { src: "drawings/old-digital-collection/as-creepy.png", alt: "Me Creepy" },
                                                { src: "drawings/old-digital-collection/asChibi.png", alt: "Me Chibi" },
                                                { src: "drawings/old-digital-collection/Chibi.png", alt: "Chibi Girl" },
                                            ]}
                                        />
                                    }
                                />
                                <Project
                                    title="My Drawings on Paper 📄"
                                    description="A collection of my drawings on paper that I did when I was in 6th-8th grade in school. I was just starting to learn how to draw; I always wanted to be able to draw anime-style well. It features various anime or anime-like drawings I loved back then and now."
                                    embed={
                                        <ArtworkGallery
                                            images={[
                                                { src: "drawings/irl-school-year-drawings/20240109_042232.jpg", alt: "", rotation: -90 },
                                                { src: "drawings/irl-school-year-drawings/20240109_042340.jpg", alt: "" },
                                                { src: "drawings/irl-school-year-drawings/20240109_042349.jpg", alt: "", rotation: 90 },
                                                { src: "drawings/irl-school-year-drawings/20240109_042352.jpg", alt: "", rotation: 90 },
                                                { src: "drawings/irl-school-year-drawings/20240109_042400.jpg", alt: "", rotation: 90 },
                                                { src: "drawings/irl-school-year-drawings/20240109_042444.jpg", alt: "", rotation: -90 },
                                                { src: "drawings/irl-school-year-drawings/20240109_042447.jpg", alt: "", rotation: -90 },
                                                { src: "drawings/irl-school-year-drawings/20240109_042455.jpg", alt: "", rotation: -90 },
                                                { src: "drawings/irl-school-year-drawings/20240109_045824.jpg", alt: "", rotation: -90 },
                                                { src: "drawings/irl-school-year-drawings/20240109_050239.jpg", alt: "", rotation: -90 },
                                                { src: "drawings/irl-school-year-drawings/20240109_050245.jpg", alt: "" },
                                                { src: "drawings/irl-school-year-drawings/20240109_050251.jpg", alt: "" },
                                                { src: "drawings/irl-school-year-drawings/20240109_050301.jpg", alt: "", rotation: -90 },
                                            ]}
                                        />
                                    }
                                />
                                {/* Add more artwork projects */}
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            )}
        </Container>
    );
};

export default ProjectsPage;