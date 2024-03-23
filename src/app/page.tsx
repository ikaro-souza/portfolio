/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import { Section, SectionTitle } from "~/components/section";
import {
    SectionCard,
    SectionCardBody,
    SectionCardDateRange,
    SectionCardFooter,
    SectionCardImage,
    SectionCardText,
    SectionCardTitle,
} from "~/components/section-card";
import { SocialItem } from "~/components/social-item";

export default function Page() {
    return (
        <main className="flex flex-col gap-14 p-4 pb-14">
            <header className="flex flex-col gap-6 text-center">
                <h1 className="font-display text-3xl font-bold tracking-wide">
                    Opa, tudo bom?
                    <br />
                    Eu sou o Ikaro.
                </h1>
                <section className="flex flex-col items-center gap-3">
                    <div className="flex h-36 w-36 items-end justify-center overflow-clip rounded-full bg-white dark:bg-neutral-800">
                        <Image
                            src="/avatar.png"
                            alt="Ikaro Souza"
                            height={120}
                            width={118.03}
                            className="object-contain object-center"
                        />
                    </div>
                    <h2 className="text-xl font-bold leading-6 tracking-wide">
                        Engenheiro Full Stack
                    </h2>
                    <p className="text-neutral-800 dark:text-neutral-200">
                        Há 4 anos apaixonado por desenvolver produtos incríveis
                        na web.
                    </p>
                    <div className="grid grid-cols-2 grid-rows-2 justify-center gap-5">
                        <SocialItem
                            Icon={(props) => (
                                <IconBrandLinkedin {...(props as any)} />
                            )}
                            label="LinkedIn"
                            url="https://www.linkedin.com/in/ikaro-souza-b5a375174"
                        />
                        <SocialItem
                            Icon={(props) => (
                                <IconBrandGithub {...(props as any)} />
                            )}
                            label="GitHub"
                            url="https://github.com/ikaro-souza/"
                        />
                        <SocialItem
                            Icon={(props) => (
                                <IconBrandWhatsapp {...(props as any)} />
                            )}
                            label="WhatsApp"
                            url="https://wa.me/5588992908073?text=Eae%20mofi"
                        />
                        <SocialItem
                            Icon={(props) => <IconMail {...(props as any)} />}
                            label="Email"
                            url="mailto:ikaro.lisarb@gmail.com?subject=Meu%20Deus%20como%20a%20web%20%C3%A9%20divertida&body=Quando%20eu%20vi%20o%20app%20de%20e-mail%20abrir%20com%20um%20subject%20e%20body%20preenchidos%20eu%20tive%20a%20mesma%20sensa%C3%A7%C3%A3o%20de%20quando%20vi%20meu%20primeiro%20Hello%20World%20em%20HTML%20sendo%20renderizado."
                        />
                    </div>
                </section>
            </header>
            <Section>
                <SectionTitle>Experiências profissionais</SectionTitle>
                <SectionCard>
                    <SectionCardImage
                        src="/logos/solar-logo.jpg"
                        alt="Solar Coca-Cola"
                    />
                    <SectionCardBody>
                        <SectionCardTitle>
                            Analista de Sistemas Sênior
                        </SectionCardTitle>
                        <SectionCardText>Solar Coca-Cola</SectionCardText>
                        <SectionCardFooter>
                            <SectionCardDateRange
                                startDate={new Date(2023, 11)}
                                endDate={new Date(2024, 1)}
                            />
                        </SectionCardFooter>
                    </SectionCardBody>
                </SectionCard>
                <SectionCard>
                    <SectionCardImage
                        src="/logos/kuantokusta-logo.png"
                        alt="KuantoKusta"
                    />
                    <SectionCardBody>
                        <SectionCardTitle>
                            Desenvolvedor Front-end
                        </SectionCardTitle>
                        <SectionCardText>KuantoKusta</SectionCardText>
                        <SectionCardFooter>
                            <SectionCardDateRange
                                startDate={new Date(2023, 3)}
                                endDate={new Date(2023, 10)}
                            />
                        </SectionCardFooter>
                    </SectionCardBody>
                </SectionCard>
                <SectionCard>
                    <SectionCardImage
                        src="/logos/nutcache-logo.png"
                        alt="Nutcache"
                    />
                    <SectionCardBody>
                        <SectionCardTitle>
                            Desenvolvedor Front-end
                        </SectionCardTitle>
                        <SectionCardText>Nutcache</SectionCardText>
                        <SectionCardFooter>
                            <SectionCardDateRange
                                startDate={new Date(2022, 5)}
                                endDate={new Date(2023, 2)}
                            />
                        </SectionCardFooter>
                    </SectionCardBody>
                </SectionCard>
                <SectionCard>
                    <SectionCardImage
                        src="/logos/fitbank-logo.webp"
                        alt="FitBank"
                    />
                    <SectionCardBody>
                        <SectionCardTitle>Tech Lead</SectionCardTitle>
                        <SectionCardText>FitBank</SectionCardText>
                        <SectionCardFooter>
                            <SectionCardDateRange
                                startDate={new Date(2021, 5)}
                                endDate={new Date(2022, 5)}
                            />
                        </SectionCardFooter>
                    </SectionCardBody>
                </SectionCard>
                <SectionCard>
                    <SectionCardImage
                        src="/logos/fitbank-logo.webp"
                        alt="FitBank"
                    />
                    <SectionCardBody>
                        <SectionCardTitle>
                            Desenvolvedor Fullstack
                        </SectionCardTitle>
                        <SectionCardText>FitBank</SectionCardText>
                        <SectionCardFooter>
                            <SectionCardDateRange
                                startDate={new Date(2020, 4)}
                                endDate={new Date(2021, 5)}
                            />
                        </SectionCardFooter>
                    </SectionCardBody>
                </SectionCard>
                <SectionCard>
                    <SectionCardImage
                        src="/logos/fitbank-logo.webp"
                        alt="FitBank"
                    />
                    <SectionCardBody>
                        <SectionCardTitle>Estagiário</SectionCardTitle>
                        <SectionCardText>FitBank</SectionCardText>
                        <SectionCardFooter>
                            <SectionCardDateRange
                                startDate={new Date(2019, 11)}
                                endDate={new Date(2020, 3)}
                            />
                        </SectionCardFooter>
                    </SectionCardBody>
                </SectionCard>
            </Section>
            <Section>
                <SectionTitle>Educação</SectionTitle>
                <SectionCard>
                    <SectionCardImage
                        alt="Estácio FIC"
                        src="/logos/estacio-logo.png"
                    />
                    <SectionCardBody>
                        <SectionCardTitle>
                            Análise e Desenvolvimeno de Sistemas
                        </SectionCardTitle>
                        <SectionCardText>Estácio FIC</SectionCardText>
                        <SectionCardFooter>
                            <SectionCardDateRange
                                startDate={new Date(2019, 6)}
                                endDate={new Date(2022, 11)}
                            />
                        </SectionCardFooter>
                    </SectionCardBody>
                </SectionCard>
                <SectionCard>
                    <SectionCardImage
                        alt="IFCE Fortaleza"
                        src="/logos/ifce-logo.png"
                    />
                    <SectionCardBody>
                        <SectionCardTitle>
                            Técnico em Informática
                        </SectionCardTitle>
                        <SectionCardText>IFCE Fortaleza</SectionCardText>
                        <SectionCardFooter>
                            <SectionCardDateRange
                                startDate={new Date(2019, 6)}
                                endDate={new Date(2022, 11)}
                            />
                        </SectionCardFooter>
                    </SectionCardBody>
                </SectionCard>
            </Section>
        </main>
    );
}
