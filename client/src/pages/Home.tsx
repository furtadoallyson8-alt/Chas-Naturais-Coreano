import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Droplets, Heart, Sparkles, Check } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Premium Feminine Wellness
 * - Sage green (#7ba99e) for trust, nature, and calm
 * - Cream/white backgrounds for cleanliness and lightness
 * - Butter yellow accents (#d4c9a8) for delicate highlights
 * - Lora serif for elegant, feminine headlines
 * - Poppins sans-serif for clean, readable body text
 * - Lots of whitespace and breathing room
 * - Watercolor botanical elements throughout
 * - Emotional, persuasive copy focused on lightness and self-care
 */

const CHECKOUT_URL = "https://pay.cakto.com.br/xfs7skj_818406";

const INGREDIENTS = [
  {
    name: "Porangaba",
    description: "Reduz inchaço e promove leveza natural no corpo",
    icon: "🌿",
  },
  {
    name: "Centella Asiática",
    description: "Fortalece a pele e traz luminosidade de dentro para fora",
    icon: "🍃",
  },
  {
    name: "Cavalinha",
    description: "Desintoxica suavemente e melhora a elasticidade",
    icon: "🌱",
  },
  {
    name: "Camomila",
    description: "Acalma, relaxa e prepara o corpo para o repouso",
    icon: "🌼",
  },
];

const BENEFITS = [
  "Mais leveza no dia a dia",
  "Sensação profunda de autocuidado",
  "Rotina mais feminina e organizada",
  "Preparo simples de chás naturais",
  "Menos pressão para começar",
  "Mais constância com hábitos leves",
  "Reconexão com o próprio corpo",
  "Começo possível para quem não quer academia",
];

const DIFFERENTIALS = [
  "Linguagem fácil e acessível",
  "Visual bonito e inspirador",
  "Pensado para mulheres reais",
  "Sem tom agressivo ou frio",
  "Com experiência emocional genuína",
  "Inspirado em autocuidado e bem-estar",
  "Foco em começo leve, não em sofrimento",
];

const FOR_YOU = [
  "Quer começar de forma natural e leve",
  "Ama o universo coreano e estética asiática",
  "Deseja uma rotina mais delicada",
  "Quer autocuidado sem radicalismo",
  "Gosta de conteúdos femininos e sofisticados",
  "Quer um primeiro passo simples e acolhedor",
  "Se sente cansada de promessas exageradas",
];

const FAQS = [
  {
    q: "O ebook é físico ou digital?",
    a: "É 100% digital. Você recebe acesso imediato após a compra e pode ler no seu celular, tablet ou computador.",
  },
  {
    q: "Vou receber na hora?",
    a: "Sim! Após a confirmação do pagamento, você recebe o link de acesso instantaneamente por email.",
  },
  {
    q: "É fácil de entender?",
    a: "Muito! O ebook foi escrito com linguagem simples e prática, ideal para quem está começando.",
  },
  {
    q: "Serve para quem está começando?",
    a: "Perfeito! Este é um guia introdutório pensado especialmente para quem quer começar do zero.",
  },
  {
    q: "O conteúdo é só sobre chá?",
    a: "Não. O ebook inclui rituais de autocuidado, organização de rotina e uma abordagem feminina e holística.",
  },
  {
    q: "Qual a diferença entre o produto de R$27 e o de R$67?",
    a: "O de R$27 é o guia introdutório com os 4 ingredientes. O de R$67 inclui receitas extras orientais, módulo de skincare, rituais premium e uma experiência muito mais completa.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim! O ebook é totalmente responsivo e foi otimizado para leitura em celular.",
  },
  {
    q: "Em quanto tempo recebo?",
    a: "Instantaneamente! Logo após confirmar o pagamento, você já tem acesso ao conteúdo.",
  },
];

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032447374/jZKh6ADFfgqNsAXbsMcawC/hero-background-Tkvv9KBJLPcPqEvNEvP5ue.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Ebook Cover */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm drop-shadow-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032447374/jZKh6ADFfgqNsAXbsMcawC/hero-ebook-cover-QXdkusj66SQkhCkcfAByX2.webp"
                  alt="Capa do ebook 4 Ingredientes Naturais da Coreia"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="space-y-6">
              <div className="inline-block bg-amber-50 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-amber-900">
                  ✨ Oferta de Entrada
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-sage-green leading-tight">
                Descubra os 4 Ingredientes Naturais que Estão Chamando Atenção
                na Coreia
              </h1>

              <p className="text-xl text-gray-700 font-light">
                Um guia prático de chás naturais para mulheres que querem se
                sentir mais leves, mais cuidadas e mais confiantes sem pressão
                e sem radicalismos
              </p>

              <p className="text-lg text-gray-600 italic">
                "Você não precisa começar sofrendo. Comece com um ritual leve,
                natural e acolhedor."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-sage-green hover:bg-sage-green/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    QUERO MEU EBOOK AGORA
                  </Button>
                </a>
              </div>

              <div className="space-y-2 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-green" />
                  <span>Acesso digital imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-green" />
                  <span>Leitura prática e rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-green" />
                  <span>Linguagem simples e acolhedora</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-green" />
                  <span>Ideal para iniciantes</span>
                </div>
              </div>

              <div className="pt-6 border-t border-amber-100">
                <p className="text-3xl font-bold text-sage-green">R$ 27,00</p>
                <p className="text-sm text-gray-500 mt-2">
                  Acesso vitalício ao conteúdo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO / DOR DA CLIENTE */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-sage-green">
            Se você está cansada de começar e parar, talvez esse seja o jeito
            leve que faltava
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Se sente inchada e pesada",
              "Quer começar mas não sabe por onde",
              "Não quer métodos radicais",
              "Ama autocuidado e estética delicada",
              "Quer uma rotina natural e prática",
              "Deseja se olhar com mais carinho",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white">
                <Leaf className="w-6 h-6 text-sage-green flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE É O EBOOK */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-sage-green">
            O que você vai encontrar neste ebook
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {INGREDIENTS.map((ingredient, idx) => (
              <Card
                key={idx}
                className="p-8 bg-gradient-to-br from-white to-amber-50 border-amber-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{ingredient.icon}</div>
                <h3 className="text-2xl font-bold text-sage-green mb-3">
                  {ingredient.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {ingredient.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="bg-sage-green/5 rounded-lg p-8 border border-sage-green/20">
            <h3 className="text-2xl font-bold text-sage-green mb-6">
              O ebook também inclui:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Introdução ao uso dos 4 ingredientes",
                "Explicação simples de cada um",
                "Preparo dos chás passo a passo",
                "Organização da sua rotina",
                "Plano leve de 7 dias para começar",
                "Orientação prática e acolhedora",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-sage-green">
            O que esse guia pode despertar na sua rotina
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-lg border border-amber-100">
                <Heart className="w-6 h-6 text-sage-green flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE É DIFERENTE */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-sage-green">
            Não é só um ebook sobre chá. É um convite para recomeçar com leveza
          </h2>

          <div className="space-y-4">
            {DIFFERENTIALS.map((diff, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-r from-amber-50 to-white rounded-lg border-l-4 border-sage-green"
              >
                <p className="text-lg text-gray-700">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOCKUP VISUAL */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-sage-green">
            Um conteúdo bonito, leve e gostoso de consumir
          </h2>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl drop-shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032447374/jZKh6ADFfgqNsAXbsMcawC/ritual-lifestyle-itxj37QjWoJbaAkUXq55JY.webp"
                alt="Mulher desfrutando ritual de chá"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            Conteúdo premium, visual sofisticado, totalmente responsivo para
            celular
          </p>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-sage-green">
            Esse ebook é para você que...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FOR_YOU.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4">
                <div className="w-2 h-2 rounded-full bg-sage-green flex-shrink-0 mt-2" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREÇO PRINCIPAL - R$27 */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-sage-green">
            Comece hoje por apenas R$ 27,00
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032447374/jZKh6ADFfgqNsAXbsMcawC/ingredients-visual-33WRtDfJRWrufBUP9NLKY7.webp"
                  alt="Ingredientes naturais"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-sage-green">
                Guia Introdutório
              </h3>

              <ul className="space-y-3">
                {[
                  "4 ingredientes principais",
                  "Preparo dos chás",
                  "Rotina leve e prática",
                  "Plano de 7 dias para começar",
                  "Guia introdutório acolhedor",
                  "Bônus: Plano leve de 7 dias",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-sage-green" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </ul>

              <div className="pt-6 border-t border-amber-200">
                <p className="text-5xl font-bold text-sage-green mb-2">
                  R$ 27,00
                </p>
                <p className="text-gray-600">Acesso vitalício</p>
              </div>

              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full bg-sage-green hover:bg-sage-green/90 text-white font-semibold py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  QUERO GARANTIR MEU EBOOK POR R$27
                </Button>
              </a>

              <p className="text-center text-sm text-gray-500">
                Acesso imediato após confirmação do pagamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSIÇÃO PARA UPSELL */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-green mb-6">
            Quer ir além do básico e transformar isso em um ritual completo de
            beleza e autocuidado?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Para mulheres que querem uma experiência mais completa, mais
            refinada e com ainda mais possibilidades práticas, existe uma
            próxima etapa.
          </p>
        </div>
      </section>

      {/* UPSELL - R$67 */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-sage-green/10 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-sage-green">
                🌟 VERSÃO PREMIUM
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sage-green mb-4">
              Se o primeiro ebook é o começo, este aqui é a versão premium da
              sua transformação
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Enquanto o guia inicial te mostra como começar com 4 ingredientes
              naturais, este material premium expande sua experiência com novas
              receitas, rituais orientais de autocuidado e uma abordagem muito
              mais completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-sage-green">
                Ritual Premium Asiático
              </h3>

              <div className="space-y-3">
                <p className="font-semibold text-gray-800">
                  Tudo do produto de R$27, MAIS:
                </p>
                {[
                  "Receitas extras inspiradas no Japão",
                  "Módulo completo de skincare natural",
                  "Rituais premium de beleza feminina",
                  "Rotina ampliada e mais sofisticada",
                  "Conteúdo muito mais completo",
                  "Experiência mais refinada e transformadora",
                  "Bônus: Ritual premium de manhã e noite",
                  "Bônus: Checklist de autocuidado feminino",
                  "Bônus: Guia extra de receitas de beleza",
                  "Bônus: Calendário de organização pessoal",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-amber-200">
                <p className="text-5xl font-bold text-sage-green mb-2">
                  R$ 67,00
                </p>
                <p className="text-gray-600">Acesso vitalício ao conteúdo premium</p>
              </div>

              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full bg-sage-green hover:bg-sage-green/90 text-white font-semibold py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  QUERO A VERSÃO PREMIUM POR R$67
                </Button>
              </a>
            </div>

            {/* Imagem */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-full max-w-sm drop-shadow-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032447374/jZKh6ADFfgqNsAXbsMcawC/hero-ebook-cover-QXdkusj66SQkhCkcfAByX2.webp"
                  alt="Capa do ebook premium"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-sage-green">
            Comparação entre os produtos
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-sage-green">
                  <th className="text-left py-4 px-4 font-bold text-sage-green">
                    Características
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-sage-green">
                    Guia Introdutório<br />R$ 27
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-sage-green">
                    Ritual Premium<br />R$ 67
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["4 ingredientes principais", true, true],
                  ["Preparo dos chás", true, true],
                  ["Rotina leve", true, true],
                  ["Plano de 7 dias", true, true],
                  ["Guia introdutório", true, true],
                  ["Receitas extras orientais", false, true],
                  ["Módulo de skincare natural", false, true],
                  ["Rituais premium de beleza", false, true],
                  ["Rotina ampliada", false, true],
                  ["Conteúdo muito mais completo", false, true],
                  ["Experiência premium", false, true],
                  ["Bônus: Ritual de manhã e noite", false, true],
                  ["Bônus: Checklist de autocuidado", false, true],
                  ["Bônus: Guia extra de receitas", false, true],
                  ["Bônus: Calendário de organização", false, true],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-amber-100 hover:bg-amber-50"
                  >
                    <td className="py-4 px-4 text-gray-700">{row[0]}</td>
                    <td className="py-4 px-4 text-center">
                      {row[1] ? (
                        <Check className="w-6 h-6 text-sage-green mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row[2] ? (
                        <Check className="w-6 h-6 text-sage-green mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-sage-green">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-amber-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full px-6 py-4 bg-white hover:bg-amber-50 transition-colors flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <span
                    className={`text-sage-green transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FECHAMENTO EMOCIONAL */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-green mb-8">
            Você não precisa começar em guerra com você mesma
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
            Comece leve. Comece bonita. Comece com um ritual que faça sentido
            para a sua rotina. Às vezes, o recomeço mais poderoso é justamente
            aquele que você consegue manter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-sage-green hover:bg-sage-green/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                QUERO COMEÇAR COM O EBOOK DE R$27
              </Button>
            </a>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-sage-green text-sage-green hover:bg-sage-green/5 font-semibold px-8 py-6 text-lg rounded-lg"
              >
                QUERO A EXPERIÊNCIA PREMIUM DE R$67
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sage-green/5 border-t border-amber-100 py-12">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            © 2026 4 Ingredientes Naturais da Coreia. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-gray-500">
            Este é um produto digital. Acesso imediato após confirmação do
            pagamento.
          </p>
        </div>
      </footer>
    </div>
  );
}
