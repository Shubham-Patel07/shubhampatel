import MultiLayerParallax from "../../components/MultiLayerParallex";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const work2 = () => {
    return (
        <main className={`${inter.className} overflow-y-auto h-screen`}>
            {/* Parallax Section */}
            <div className="relative">
                <MultiLayerParallax />
            </div>
            
            {/* Content Section */}
            <div className="w-full bg-[#06141D]">
                <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                        earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                        sit dolores odio excepturi facilis laboriosam officiis dolorem,
                        nobis reprehenderit molestiae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                        earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                        sit dolores odio excepturi facilis laboriosam officiis dolorem,
                        nobis reprehenderit molestiae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                        earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                        sit dolores odio excepturi facilis laboriosam officiis dolorem,
                        nobis reprehenderit molestiae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                        earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                        sit dolores odio excepturi facilis laboriosam officiis dolorem,
                        nobis reprehenderit molestiae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                        earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                        sit dolores odio excepturi facilis laboriosam officiis dolorem,
                        nobis reprehenderit molestiae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                        earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                        sit dolores odio excepturi facilis laboriosam officiis dolorem,
                        nobis reprehenderit molestiae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                        earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                        sit dolores odio excepturi facilis laboriosam officiis dolorem,
                        nobis reprehenderit molestiae.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default work2;
