/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  BookOpen, 
  History, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  Clock,
  Award,
  Layers,
  Search
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tighter text-gold-400">RESTAURADOC</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#servicos" className="hover:text-gold-400 transition-colors">Serviços</a>
          <a href="#diferenciais" className="hover:text-gold-400 transition-colors">Diferenciais</a>
          <a href="#sobre" className="hover:text-gold-400 transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-gold-400 transition-colors">Contato</a>
          <a 
            href="https://wa.link/cq2woq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gold-600 hover:bg-gold-500 text-white rounded-full transition-all duration-300 flex items-center gap-2"
          >
            Orçamento <MessageCircle size={16} />
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-[#050505] p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 mt-12 text-2xl font-serif">
              <a href="#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
              <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
              <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
          alt="Antique Books" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            Excelência em Conservação
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-8 tracking-tighter">
            A Imortalidade <br />
            <span className="text-gold-400 italic">do seu Acervo.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-lg mb-10 font-light leading-relaxed">
            Restauração profissional e pastas sob medida com a maestria de quem preserva a história e o patrimônio institucional há mais de 30 anos.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.link/cq2woq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-3 group"
            >
              Solicitar Avaliação <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicos"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-full font-semibold transition-all duration-300"
            >
              Conhecer Serviços
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-serif font-bold text-gold-400">+30</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Anos de História</div>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <div className="text-3xl font-serif font-bold text-gold-400">100%</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Artesanal</div>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <div className="text-3xl font-serif font-bold text-gold-400">Brasil</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Atendimento Nacional</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-gold-900/20">
            <img 
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1000" 
              alt="Restoration Work" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl z-20 max-w-[200px] animate-float">
            <Award className="text-gold-400 mb-2" size={32} />
            <p className="text-sm font-medium">Padrão Institucional de Segurança</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  const items = [
    {
      title: "Tradição e Maestria",
      desc: "Mais de três décadas dedicadas à arte do restauro e conservação.",
      icon: <History className="text-gold-400" />,
      size: "col-span-2 row-span-1",
      img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Segurança Total",
      desc: "Protocolos rígidos para documentos sigilosos e históricos.",
      icon: <Shield className="text-gold-400" />,
      size: "col-span-1 row-span-1",
    },
    {
      title: "Acabamento Premium",
      desc: "Cada peça é única, produzida com materiais de altíssima durabilidade.",
      size: "col-span-1 row-span-2",
      img: "https://images.unsplash.com/photo-1544640805-3536cd2d2885?auto=format&fit=crop&q=80&w=800",
      icon: null
    },
    {
      title: "Atendimento Nacional",
      desc: "Logística preparada para atender tribunais e cartórios em todo o Brasil.",
      icon: <MapPin className="text-gold-400" />,
      size: "col-span-2 row-span-2",
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Por que a <span className="text-gold-400">RESTAURADOC?</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">Combinamos técnicas ancestrais com as necessidades modernas de organização e proteção.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`${item.size} glass rounded-3xl p-8 relative overflow-hidden group`}
            >
              {item.img && (
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img src={item.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              )}
              <div className="relative z-10">
                {item.icon ? (
                  <div className="mb-4 p-3 bg-white/5 rounded-xl inline-block">
                    {item.icon}
                  </div>
                ) : null}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-4 block">Nossas Especialidades</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Soluções sob medida para o seu <span className="text-gold-400 italic">patrimônio.</span></h2>
          </div>
          <p className="text-white/40 max-w-sm mb-2">Preservamos o passado para garantir o futuro da sua instituição.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group cursor-pointer flex flex-col h-full">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/d/1tBnWU3P5Sdh0hPj6Uy3iUaBZ5YksT4fH" 
                alt="Pastas Cartorárias" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 text-gold-400 mb-2">
                  <Layers size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Produção em Lote</span>
                </div>
                <h3 className="text-2xl font-serif font-bold">Pastas Cartorárias</h3>
              </div>
            </div>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Organização, conservação e apresentação profissional para acervos físicos institucionais. Feitas conforme medidas e perfil do cliente.
            </p>
            <ul className="space-y-3 mb-8">
              {['Proteção por décadas', 'Padronização visual', 'Acabamento artesanal', 'Pedidos sob encomenda'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-white/80">
                  <CheckCircle2 size={14} className="text-gold-400" /> {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.link/cq2woq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 glass rounded-full font-bold hover:bg-gold-600 hover:text-white transition-all duration-300 flex justify-center items-center gap-2 text-sm mt-auto"
            >
              Orçamento <MessageCircle size={16} />
            </a>
          </div>

          {/* Service 2 */}
          <div className="group cursor-pointer flex flex-col h-full">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/d/1hxBK3iKfT5-EBgltW_egjvleRuLhSiu7" 
                alt="Restauração Profissional" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 text-gold-400 mb-2">
                  <BookOpen size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Alta Complexidade</span>
                </div>
                <h3 className="text-2xl font-serif font-bold">Restauração Profissional</h3>
              </div>
            </div>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Preservação e recuperação com segurança máxima para evitar perda definitiva de documentos históricos e livros raros.
            </p>
            <ul className="space-y-3 mb-8">
              {['Tratamento de mofo', 'Recuperação de lombadas', 'Atendimento in loco', 'Segurança total'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-white/80">
                  <CheckCircle2 size={14} className="text-gold-400" /> {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.link/cq2woq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 glass rounded-full font-bold hover:bg-gold-600 hover:text-white transition-all duration-300 flex justify-center items-center gap-2 text-sm mt-auto"
            >
              Avaliação <MessageCircle size={16} />
            </a>
          </div>

          {/* Service 3 */}
          <div className="group cursor-pointer flex flex-col h-full">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 border border-white/10">
              <img 
                src="https://i.imgur.com/uyQfBG3.jpeg" 
                alt="Pasta com Plástico" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 text-gold-400 mb-2">
                  <Shield size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Proteção Extra</span>
                </div>
                <h3 className="text-2xl font-serif font-bold">Pasta com Plástico</h3>
              </div>
            </div>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Sistema exclusivo de envelopes plásticos de alta durabilidade para proteção individual de cada folha do seu acervo.
            </p>
            <ul className="space-y-3 mb-8">
              {['Polietileno extra virgem', 'Solda reforçada no fundo', 'Flexibilidade superior', 'Ideal para manuseio frequente'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-white/80">
                  <CheckCircle2 size={14} className="text-gold-400" /> {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.link/cq2woq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 glass rounded-full font-bold hover:bg-gold-600 hover:text-white transition-all duration-300 flex justify-center items-center gap-2 text-sm mt-auto"
            >
              Saber Mais <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Technical Specifications Section */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="text-center mb-16">
            <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-4 block">Excelência Técnica</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Especificações de <span className="text-gold-400 italic">Alta Performance</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Estrutura de Alta Densidade",
                text: "As Capas dos livros e das Pastas são confeccionadas em papelão sólido a base de madeira de alta densidade garantindo rigidez e durabilidade inigualáveis."
              },
              {
                title: "Revestimento em Brim",
                text: "O revestimento das Capas dos Livros e das Pastas em Brim 100% algodão garantido flexibilidade e alta resistência."
              },
              {
                title: "Aderência e Flexibilidade",
                text: "Utilizamos somente Cola Branca Extra de alta aderência, a qual apresenta uma textura emborrachada garantindo flexibilidade nas áreas dobráveis mesmo ao longo dos anos."
              },
              {
                title: "Ferragens Anti-Oxidação",
                text: "Parafusos das Pastas fabricados em uma liga especial de bronze e acabamento cromado que não oxida."
              },
              {
                title: "Acabamento Personalizado",
                text: "Acabamento interno das Capas dos Livros e Pastas em Papel Cartão Couchê com estampa personalizada."
              },
              {
                title: "Envelopes de Alta Durabilidade",
                text: "Os envelopes plásticos são fabricados 100% em polietileno extra virgem com exclusivo sistema de solda no fundo, garantindo flexibilidade e longevidade."
              }
            ].map((spec, i) => (
              <div key={i} className="p-8 glass rounded-2xl border-l-4 border-l-gold-500">
                <h4 className="text-gold-400 font-bold mb-3 text-lg">{spec.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{spec.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const items = [
    {
      title: "Pastas Cartorárias",
      category: "PASTA COM PLASTICOS",
      img: "https://imgur.com/6yBp0X7.jpeg"
    },
    {
      title: "Restauração Profissional",
      category: "Antes e Depois",
      img: "https://imgur.com/0sVcQiw.jpeg"
    },
    {
      title: "PASTAS PARA REGISTRO",
      category: "Proteção de Acervos",
      img: "https://i.imgur.com/GeH6CPU.jpeg"
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nosso <span className="text-gold-400">Portfólio</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">Conheça alguns dos trabalhos realizados para instituições de todo o Brasil.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-square border border-white/10">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h4 className="text-xl font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlasticFolderSection = () => {
  return (
    <section className="py-24 bg-gold-950/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-4 block">Destaque de Produto</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Pasta com <span className="text-gold-400 italic">Plásticos Individuais</span></h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Desenvolvida para acervos que exigem manuseio constante sem comprometer a integridade do papel. O sistema de envelopes plásticos garante que cada folha esteja protegida contra umidade, poeira e oleosidade das mãos.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 glass rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-bold">Polietileno 100% Virgem</h4>
                <p className="text-white/40 text-sm">Transparência total e flexibilidade superior.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 glass rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                <Layers size={24} />
              </div>
              <div>
                <h4 className="font-bold">Solda de Fundo Exclusiva</h4>
                <p className="text-white/40 text-sm">Evita que os documentos deslizem ou caiam.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-gold-900/10">
            <img 
              src="https://i.imgur.com/uyQfBG3.jpeg" 
              alt="Pasta com Plástico Detalhe" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl animate-float">
            <span className="text-gold-400 font-bold block">Alta Durabilidade</span>
            <span className="text-white/40 text-xs">Padrão Restauradoc</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
const ContactForm = () => {
  return (
    <section id="contato" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Inicie a <span className="text-gold-400">preservação</span> do seu acervo hoje.</h2>
        <p className="text-white/50 mb-16 text-lg max-w-2xl mx-auto">
          Nossa equipe está pronta para avaliar seu material e propor a melhor solução técnica e estética.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-6 p-10 glass rounded-3xl">
            <div className="p-4 bg-gold-500/10 rounded-2xl text-gold-400"><MessageCircle size={32} /></div>
            <div>
              <h4 className="text-xl font-bold mb-2">WhatsApp Direto</h4>
              <p className="text-white/40 text-sm mb-4">Resposta rápida para orçamentos e dúvidas.</p>
              <a 
                href="https://wa.link/cq2woq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gold-600 hover:bg-gold-500 text-white rounded-full font-bold transition-all duration-300 inline-block"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 p-10 glass rounded-3xl">
            <div className="p-4 bg-gold-500/10 rounded-2xl text-gold-400"><MapPin size={32} /></div>
            <div>
              <h4 className="text-xl font-bold mb-2">Atendimento Brasil</h4>
              <p className="text-white/40 text-sm">Enviamos e coletamos materiais em todo o território nacional.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 p-10 glass rounded-3xl">
            <div className="p-4 bg-gold-500/10 rounded-2xl text-gold-400"><Search size={32} /></div>
            <div className="w-full">
              <h4 className="text-xl font-bold mb-2">E-mail de Contato</h4>
              <p className="text-white/40 text-sm mb-6">Envie sua solicitação detalhada por e-mail.</p>
              <div className="bg-white/5 py-3 px-4 rounded-xl border border-white/5">
                <span className="text-gold-400 font-mono text-sm break-all">
                  restauradoc.orcamento@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-serif text-xl font-bold text-gold-400">RESTAURADOC</div>
        <div className="text-white/30 text-sm">
          © 2026 RESTAURADOC. Todos os direitos reservados.
        </div>
        <div className="flex gap-6 text-white/40 text-sm">
          <a href="#" className="hover:text-gold-400">Privacidade</a>
          <a href="#" className="hover:text-gold-400">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      < BentoGrid />
      <Services />
      
      {/* Authority Marquee */}
      <div className="py-12 bg-gold-600 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-12 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white text-2xl font-serif font-bold italic opacity-80 uppercase tracking-tighter">
              +30 Anos de Maestria • Padrão Institucional • Atendimento Brasil • Restauro Premium • 
            </span>
          ))}
        </div>
      </div>

      <PlasticFolderSection />
      <Portfolio />
      <ContactForm />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.link/cq2woq" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
        aria-label="WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}
