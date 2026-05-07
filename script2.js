        {/* Wave bottom separator */}
        <svg viewBox="0 0 1440 120" className="absolute bottom-0 left-0 w-full text-[#f8fafc] translate-y-1" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12 -mt-10 relative z-20 space-y-12">

        {/* SECTION: DRESS CODE */}
        <div className="bg-[#101729] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-800">
          
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#6ef0b9] p-3.5 rounded-full shadow-[0_0_20px_rgba(110,240,185,0.3)]">
              <Shirt className="w-7 h-7 text-[#101729]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Código de Vestimenta</h2>
          </div>

          <p className="text-gray-400 mb-8 text-lg">Revisa nuestras sugerencias para empacar y estar listo para cada ocasión.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Cena de Bienvenida */}
            <div className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <PartyPopper className="w-6 h-6 text-[#6ef0b9]" />
                <h3 className="text-xl font-bold text-white">Cena de Bienvenida</h3>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Zapatos cómodos, ropa fresca y semiformal. Ideal para romper el hielo.
              </p>
              <div className="inline-block bg-[#6ef0b9] text-[#101729] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                CÓCTEL TROPICAL / ELEGANTE GUAYABERA
              </div>
            </div>

            {/* Card 2: Sesión de trabajo 1er día */}
            <div className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-[#3b82f6]" />
                <h3 className="text-xl font-bold text-white">Sesión de trabajo 1er día</h3>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Hombres:</strong> Calzado cómodo y cerrado, o tenis casuales de vestir limpios. Ropa fresca y semiformal.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Mujeres:</strong> Ropa fresca, semi-formal, zapatos cómodos.
                </p>
              </div>
              <div className="inline-block bg-[#3b82f6] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                BUSINESS CASUAL DE PLAYA
              </div>
            </div>

            {/* Card 3: Sesión de trabajo 2do día */}
            <div className="bg-[#1e293b] rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Ticket className="w-6 h-6 text-[#f59e0b]" />
                <h3 className="text-xl font-bold text-white">Sesión de trabajo 2do día</h3>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                <strong className="text-white">Hombres/Mujeres:</strong> Pantalón de mezclilla o shorts, tenis cómodos y limpios, gorra y ¡trae tu playera Culligan!
              </p>
              <div className="inline-block bg-[#f59e0b] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                DÍA DE ESTADIO ⚽
              </div>
            </div>

            {/* Card 4: Cena de cierre */}
            <div className="bg-gradient-to-br from-[#1d4ed8] to-[#2563eb] rounded-3xl p-8 border border-blue-500 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                 <Camera className="w-24 h-24 text-white" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <ThermometerSun className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Cena de cierre</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-blue-100 text-sm leading-relaxed">
                    <strong className="text-white">Hombres:</strong> Ropa fresca, relajada y colorida. Camisas estampadas, bermudas de vestir, pantalones de lino sueltos. Zapatos tipo mocasines, mules o tenis cómodos casuales y limpios.
                  </p>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    <strong className="text-white">Mujeres:</strong> Ropa fresca, relajada y colorida. Vestidos, pantalones o conjuntos frescos. Se recomienda alpargatas, plataformas, sandalias planas semi-formales o tenis limpios.
                  </p>
                </div>
                <div className="inline-block bg-white text-[#1d4ed8] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  BEACH CLUB FESTIVO ¡A ponernos guapos!
                </div>
              </div>
            </div>

          </div>

          {/* Footer Banner: Don't forget */}
          <div className="mt-8 bg-[#172135] border border-gray-700 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#6ef0b9] rounded-full p-1.5">
                <AlertCircle className="w-5 h-5 text-[#101729]" />
              </div>
              <h4 className="text-white font-bold text-lg">¡No olvides empacar!</h4>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
              <span className="bg-[#2a374a] text-gray-200 text-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-600">
                <Droplets className="w-4 h-4 text-blue-400" /> Termo
              </span>
              <span className="bg-[#2a374a] text-gray-200 text-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-600">
                 Traje de baño
              </span>
              <span className="bg-[#2a374a] text-gray-200 text-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-600">
                 Tenis deportivos
              </span>
              <span className="bg-[#2a374a] text-gray-200 text-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-gray-600">
                <ThermometerSun className="w-4 h-4 text-yellow-400" /> FPS 25-50+
              </span>
            </div>
          </div>
        </div>

        {/* SECTION: MOODBOARD (INTERACTIVE) */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-[#101729] mb-3">Tu Moodboard de Estilo</h2>
            <p className="text-gray-500">
              ¿No estás seguro de qué llevar? Sube aquí algunas fotos de referencia o inspiración para armar tus outfits para cada evento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Slot Mapping */}
            {[
              { id: 'bienvenida', title: 'Cena de Bienvenida', sub: 'Cóctel Tropical' },
              { id: 'dia1', title: '1er Día', sub: 'Business Playa' },
              { id: 'dia2', title: '2do Día', sub: 'Día de Estadio' },
              { id: 'cierre', title: 'Cena de Cierre', sub: 'Beach Club' }
            ].map((slot) => (
              <div key={slot.id} className="flex flex-col gap-3">
                <div className="text-center">
                  <h4 className="font-bold text-gray-800">{slot.title}</h4>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{slot.sub}</span>
                </div>
                
                <div 
                  onClick={() => !images[slot.id] && fileInputRefs[slot.id].current.click()}
                  className={`relative h-64 rounded-2xl overflow-hidden transition-all duration-300 flex items-center justify-center group ${
                    images[slot.id] 
                      ? 'bg-gray-100 shadow-md border-0' 
                      : 'border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-blue-400 cursor-pointer'
                  }`}
                >
                  {/* Hidden Input */}
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={fileInputRefs[slot.id]}
                    onChange={(e) => handleImageUpload(e, slot.id)}
                  />

                  {images[slot.id] ? (
                    <>
                      <img src={images[slot.id]} alt={`Moodboard ${slot.title}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          onClick={(e) => clearImage(e, slot.id)}
                          className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-transform hover:scale-110 shadow-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center px-4 flex flex-col items-center">
                      <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                        <ImagePlus className="w-6 h-6 text-gray-400 group-hover:text-blue-500" />
                      </div>
                      <p className="text-sm font-medium text-gray-500">Haz clic para subir foto</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}