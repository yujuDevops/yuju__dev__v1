"use client"

import "./step-two.css"
import { useMemo, useState, useEffect, useCallback } from "react"
import PhoneModal from "../ui/PhoneModal"

const COMPANY_DISCOUNTS = {
  rus: {
    rc: 0.7, // 30% de descuento
  },
  "san cristóbal": {}, // precio original
  experta: {
    terceros: 0.85, // 15% de descuento
  }, // precio original
  "mercantil andina": {}, // precio original
  integrity: {
    terceros: 0.55, // 45% de descuento
  },
}

const applyCompanyDiscount = (price, companyName, coverageType) => {
  if (typeof price !== "number" || !isFinite(price)) return price
  const companyKey = companyName?.toLowerCase() || ""
  const companyDiscounts = COMPANY_DISCOUNTS[companyKey] || {}
  const discountMultiplier = companyDiscounts[coverageType] || 1.0
  return price * discountMultiplier
}

const fmtARS = (n, companyName, coverageType = null) => {
  if (typeof n !== "number" || !isFinite(n)) return "-"

  // Aplicar primero el descuento de la empresa (si se proporciona el tipo de cobertura) Esta OK
  const discountedPrice = coverageType ? applyCompanyDiscount(n, companyName, coverageType) : n

  // Aplicamos calculos anuales a las compañias ----SI FUNCIONA CORRECTAMENTE
  const finalPrice =
    companyName?.toLowerCase() === "san cristóbal" || companyName?.toLowerCase() === "integrity"
      ? discountedPrice / 12
      : discountedPrice

  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(finalPrice)
}

const LOGOS = {
  experta: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988245/EXPERTA_n9hhnn.png",
  "san cristóbal": "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988252/SANCRISTOBAL_kazpdd.png",
  "mercantil andina": "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988250/MERCANTIL_x2mdnw.png",
  rus: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988252/RUS_mqiqvz.png",
  integrity: "https://res.cloudinary.com/dewcgbpvp/image/upload/v1722988249/INTEGRITY_gjydc4.png",
}

const COVERAGE_BY_TYPE = {
  rc: ["Responsabilidad Civil", "Cobertura del Mercosur", "+ otros"],
  terceros: ["Responsabilidad Civil", "Cobertura del Mercosur", "Auxílio", "Robo, Incendio total", "+ otros"],
  tercerosCompleto: [
    "Responsabilidad Civil",
    "Cobertura del Mercosur",
    "Auxílio",
    "Robo, incendio, rotura total",
    "Robo, incendio parcial",
    "Cobertura de cristales",
    "Cobertura de granizo",
    "+ otros",
  ],
  todoRiesgo: [
    "Responsabilidad Civil",
    "Cobertura del Mercosur",
    "Auxílio",
    "Robo, incendio, rotura total",
    "Robo, incendio parcial",
    "Cobertura de cristales plus",
    "Cobertura de granizo",
    "Rotura parcial según franquícia",
    "+ otros",
  ],
}

function classify(p) {
  const name = (p.nombre || "").toLowerCase()
  const code = String(p.codigo || "").toLowerCase()
  if (name.includes("todo riesgo") || name.includes("franquicia") || /^t\d{2}/i.test(code)) return "todoRiesgo"
  if (name.includes("responsabilidad civil") || code === "rca" || name.includes("rca")) return "rc"
  if (
    name.includes("terceros completos") ||
    (name.includes("completo") && name.includes("terceros")) ||
    name.includes("full") ||
    name.includes("plus") ||
    name.includes("premium")
  )
    return "tercerosCompleto"
  if (name.includes("tercero") || name.includes("terceros")) return "terceros"
  return "terceros"
}

function getCoverageTypeLabel(type) {
  switch (type) {
    case "rc":
      return "Responsabilidad Civil"
    case "terceros":
      return "Terceros"
    case "tercerosCompleto":
      return "Terceros Completo"
    case "todoRiesgo":
      return "Todo Riesgo"
    default:
      return "Terceros"
  }
}

const getMonthlyPrice = (price, companyName, coverageType = null) => {
  if (typeof price !== "number" || !isFinite(price)) return 0

  // Aplicar primero el descuento de la empresa (si se proporciona el tipo de cobertura)
  const discountedPrice = coverageType ? applyCompanyDiscount(price, companyName, coverageType) : price

  // Aplicamos calculos anuales a las compañias
  return companyName?.toLowerCase() === "san cristóbal" || companyName?.toLowerCase() === "integrity"
    ? discountedPrice / 12
    : discountedPrice
}

const hasDiscountForCoverage = (companyName, coverageType) => {
  const companyKey = companyName?.toLowerCase() || ""
  const companyDiscounts = COMPANY_DISCOUNTS[companyKey] || {}
  return companyDiscounts[coverageType] && companyDiscounts[coverageType] < 1.0
}

const getDiscountPercentage = (companyName, coverageType) => {
  const companyKey = companyName?.toLowerCase() || ""
  const companyDiscounts = COMPANY_DISCOUNTS[companyKey] || {}
  const discountMultiplier = companyDiscounts[coverageType] || 1.0
  return Math.round((1 - discountMultiplier) * 100)
}

export default function StepTwo({ formData, results, onPrevStep, onNextStep3 }) {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60)
  const [mobileCoverageType, setMobileCoverageType] = useState("todoRiesgo")
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const [modalOpen, setModalOpen] = useState(false)
  const [leadSubmitting, setLeadSubmitting] = useState(false)
  const [leadError, setLeadError] = useState(null)
  const [selected, setSelected] = useState(null)

  const [selectedCompany, setSelectedCompany] = useState(null)
  const [expandedSections, setExpandedSections] = useState({
    rc: false,
    terceros: false,
    tercerosCompleto: true, // abierto por defecto
    todoRiesgo: false,
  })

  const marcaTxt = formData.marcaNombre || formData.marca
  const modeloTxt = formData.modeloNombre || formData.modelo
  const versionTxt = formData.version || ""
  const nombreUsuario = formData.nombre || "Nombre"
  const sumaAsegurada = formData.sumaAsegurada

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          return prev - 1
        }
        return 0
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const companies = useMemo(() => {
    const companiesWithQuotes = []

    const apiResults = new Map()
    ;(results?.cotizaciones || []).forEach((c, idx) => {
      const companyName = (c.aseguradora || "").toLowerCase()
      const plans = [...(c.planes || [])]
        .filter((p) => typeof p.precio === "number" && isFinite(p.precio))
        .sort((a, b) => a.precio - b.precio) // orden ascendente por precio

      if (plans.length > 0) {
        apiResults.set(companyName, { plans, meta: c.meta })
      }
    })

    const allCompanies = [
      { name: "RUS", logo: LOGOS["rus"] },
      { name: "San Cristóbal", logo: LOGOS["san cristóbal"] },
      { name: "Experta", logo: LOGOS["experta"] },
      { name: "Mercantil Andina", logo: LOGOS["mercantil andina"] },
      { name: "Integrity", logo: LOGOS["integrity"] },
    ]

    allCompanies.forEach((company, idx) => {
      const companyKey = company.name.toLowerCase()
      const apiData = apiResults.get(companyKey)

      if (apiData) {
        const allPlans = apiData.plans || []
        const plansByType = {
          rc: [],
          terceros: [],
          tercerosCompleto: [],
          todoRiesgo: [],
          all: allPlans,
        }

        allPlans.forEach((plan) => {
          const type = classify(plan)
          plansByType[type].push(plan)
        })

        Object.keys(plansByType).forEach((key) => {
          if (key !== "all") {
            plansByType[key].sort(
              (a, b) => getMonthlyPrice(a.precio, company.name, key) - getMonthlyPrice(b.precio, company.name, key),
            )
          }
        })

        companiesWithQuotes.push({
          id: String(idx),
          name: company.name,
          logo: company.logo,
          plans: allPlans,
          plansByType,
          meta: apiData.meta,
        })
      }
    })

    return companiesWithQuotes
  }, [results])

  const toggleSection = useCallback((coverageType) => {
    setExpandedSections((prev) => ({
      ...prev,
      [coverageType]: !prev[coverageType],
    }))
  }, [])

  const selectCompany = useCallback((companyName) => {
    setSelectedCompany((prev) => (prev === companyName ? null : companyName))
  }, [])

  const filteredCompanies = useMemo(() => {
    if (!selectedCompany) return companies
    return companies.filter((company) => company.name === selectedCompany)
  }, [companies, selectedCompany])

  const formatTime = useCallback((s) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = s % 60
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
  }, [])

  const openPhoneModal = useCallback((insurer, plan, coverageType = null) => {
    if (!plan || !insurer) {
      return
    }

    const originalPrice = plan.precio
    const discountedPrice = coverageType ? applyCompanyDiscount(plan.precio, insurer, coverageType) : plan.precio
    const finalPrice =
      insurer?.toLowerCase() === "san cristóbal" || insurer?.toLowerCase() === "integrity"
        ? discountedPrice / 12
        : discountedPrice
    const hasDiscount = coverageType ? hasDiscountForCoverage(insurer, coverageType) : false

    const planWithPricing = {
      ...plan,
      precio: finalPrice, // Precio final (con descuento y cálculo mensual)
      precioOriginal:
        insurer?.toLowerCase() === "san cristóbal" || insurer?.toLowerCase() === "integrity"
          ? originalPrice / 12
          : originalPrice, // Precio original (con cálculo mensual pero sin descuento)
      hasDiscount: hasDiscount, // Se debe mostrar el precio original tachado
      coverageType: coverageType, //Tipo de cobertura de la empresa como referencia
    }

    setSelected({
      plan: planWithPricing,
      insurer: insurer,
      coverageType: coverageType,
    })
    setLeadError(null)
    setModalOpen(true)
  }, [])

  const handleSubmitPhone = async (rawPhone) => {
    if (!selected || !selected.plan) {
      setLeadError("No hay plan seleccionado")
      return
    }

    setLeadSubmitting(true)
    setLeadError(null)

    const phone = (rawPhone || "").replace(/\D/g, "")
    if (phone.length < 8) {
      setLeadError("Ingresá un teléfono válido")
      setLeadSubmitting(false)
      return
    }

    try {
      const payload = {
        marca: marcaTxt,
        modelo_version: `${modeloTxt}${versionTxt ? " " + versionTxt : ""}`,
        cp: formData.codigoPostal,
        anio: Number(formData.anio),
        aseguradora: selected.insurer,
        plan: selected.plan?.nombre || "Plan no especificado",
        telefono: phone,
        sumaAsegurada: sumaAsegurada,
      }

      const res = await fetch("https://api-yuju.com.ar/api/cotizaciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const t = await res.text().catch(() => "")
        throw new Error(t || "No se pudo crear la cotización")
      }

      setModalOpen(false)
      setSelected(null)

      onNextStep3({
        marca: payload.marca,
        modelo_version: payload.modelo_version,
        anio: payload.anio,
        aseguradora: payload.aseguradora,
        plan: payload.plan,
        precio: selected.plan?.precio ?? null,
        telefono: phone,
        sumaAsegurada: sumaAsegurada,
      })
    } catch (err) {
      setLeadError(err?.message || "Error al guardar la cotización")
    } finally {
      setLeadSubmitting(false)
    }
  }

  const coverageOptions = [
    { value: "rc", label: "Responsabilidad Civil" },
    { value: "terceros", label: "Terceros" },
    { value: "tercerosCompleto", label: "Terceros Completo" },
    { value: "todoRiesgo", label: "Todo Riesgo" },
  ]

  const mobileCompaniesByCompany = useMemo(() => {
    const companiesByName = {}

    companies.forEach((company) => {
      const plans = company.plansByType?.[mobileCoverageType] || []

      if (plans.length > 0) {
        companiesByName[company.name] = {
          id: company.id,
          name: company.name,
          logo: company.logo,
          plans: plans.map((plan, planIndex) => ({
            id: `${company.id}-${planIndex}`,
            plan: plan,
            planIndex: planIndex,
          })),
        }
      }
    })

    return Object.values(companiesByName)
  }, [companies, mobileCoverageType])

  const [companyCarouselStates, setCompanyCarouselStates] = useState({})

  useEffect(() => {
    // Inizializando carrousel
    const initialStates = {}
    mobileCompaniesByCompany.forEach((company) => {
      initialStates[company.name] = 0
    })
    setCompanyCarouselStates(initialStates)
  }, [mobileCompaniesByCompany])

  const goToCompanyCard = useCallback((companyName, index) => {
    setCompanyCarouselStates((prev) => ({
      ...prev,
      [companyName]: index,
    }))
  }, [])

  const nextCompanyCard = useCallback((companyName, totalCards) => {
    setCompanyCarouselStates((prev) => ({
      ...prev,
      [companyName]: (prev[companyName] + 1) % totalCards,
    }))
  }, [])

  const prevCompanyCard = useCallback((companyName, totalCards) => {
    setCompanyCarouselStates((prev) => ({
      ...prev,
      [companyName]: (prev[companyName] - 1 + totalCards) % totalCards,
    }))
  }, [])

  const goToCard = useCallback((index) => {
    setCurrentCardIndex(index)
  }, [])

  const nextCard = useCallback(() => {
    setCurrentCardIndex((prev) => (prev + 1) % mobileCompaniesByCompany.length)
  }, [mobileCompaniesByCompany.length])

  const prevCard = useCallback(() => {
    setCurrentCardIndex((prev) => (prev - 1 + mobileCompaniesByCompany.length) % mobileCompaniesByCompany.length)
  }, [mobileCompaniesByCompany.length])

  const desktopGridData = useMemo(() => {
    const gridData = {
      rc: [],
      terceros: [],
      tercerosCompleto: [],
      todoRiesgo: [],
    }

    companies.forEach((company) => {
      Object.keys(gridData).forEach((coverageType) => {
        const plans = company.plansByType?.[coverageType] || []
        plans.forEach((plan) => {
          gridData[coverageType].push({
            company: company.name,
            logo: company.logo,
            plan: plan,
            price: plan.precio,
            coverageType: coverageType,
          })
        })
      })
    })

    Object.keys(gridData).forEach((coverageType) => {
      gridData[coverageType].sort(
        (a, b) => getMonthlyPrice(a.price, a.company, coverageType) - getMonthlyPrice(b.price, b.company, coverageType),
      )
    })

    return gridData
  }, [companies])

  const handleVolverACotizar = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    onPrevStep()
  }

  return (
    <div className="st2-quantum-insurance-nexus-container">
      <div className="st2-extraordinary-promo-banner-deluxe st2-desktop-only">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="st2-majestic-promo-main-text">
            {marcaTxt} - {modeloTxt} {formData.anio} {versionTxt}
          </div>
          {sumaAsegurada && (
            <div className="st2-majestic-promo-main-text" style={{ fontSize: "16px", fontWeight: "600" }}>
              Suma Asegurada:{" "}
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 0,
              }).format(sumaAsegurada)}
            </div>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "8px" }}>
          <div className="st2-spectacular-promo-special-offer">
            <span className="st2-brilliant-promo-name-text">¡{nombreUsuario} te tenemos un descuento especial!</span>
            <img
              src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1756660249/Capa_1_2_nbmsa6.png"
              alt="fire"
              className="st2-blazing-fire-icon"
            />
          </div>

          <div className="st2-quantum-separator-ksvx-232"></div>

          <div className="st2-temporal-promo-validity-section">
            <span className="st2-mystical-promo-validity-text">Válido por las próximas 24 horas</span>
            <img
              src="https://res.cloudinary.com/dewcgbpvp/image/upload/v1756660249/Capa_1_1_djihti.png"
              alt="clock"
              className="st2-chronos-clock-icon"
            />
          </div>

          <div className="st2-quantum-separator-ksvx-232"></div>

          <div className="st2-galactic-timer-section">
            <span className="st2-quantum-timer-display">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      <div className="st2-extraordinary-promo-banner-deluxe st2-mobile-only">
        <div className="st2-majestic-promo-main-text">
          {marcaTxt} - {modeloTxt} - {formData.anio}
        </div>
        {sumaAsegurada && (
          <div
            className="st2-majestic-promo-main-text"
            style={{ fontSize: "14px", fontWeight: "600", marginTop: "4px" }}
          >
            Suma Asegurada:{" "}
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
              maximumFractionDigits: 0,
            }).format(sumaAsegurada)}
          </div>
        )}
      </div>

      <div className="st2-supreme-mobile-coverage-selector">
        <label className="st2-ethereal-mobile-coverage-label">¿Cuál plan te interesa ver?</label>
        <select
          className="st2-magnificent-mobile-coverage-dropdown"
          value={mobileCoverageType}
          onChange={(e) => setMobileCoverageType(e.target.value)}
        >
          {coverageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="st2-legendary-company-filters-section">
        <div className="st2-company-filters-grid">
          {companies.map((company) => (
            <button
              key={company.id}
              className={`st2-company-filter-btn ${selectedCompany === company.name ? "st2-active" : ""}`}
              onClick={() => selectCompany(company.name)}
            >
              <img src={company.logo || "/placeholder.svg"} alt={company.name} className="st2-company-filter-logo" />
            </button>
          ))}
        </div>
      </div>

      <div className="st2-divine-coverage-sections st2-desktop-only">
        <div className="st2-desktop-grid-container">
          {coverageOptions.map((coverage) => {
            const plansForCoverage = desktopGridData[coverage.value] || []

            return (
              <div key={coverage.value} className="st2-desktop-coverage-column">
                <div className="st2-desktop-coverage-header">
                  <h3 className="st2-desktop-coverage-title">{coverage.label}</h3>
                </div>

                <div className="st2-desktop-plans-list">
                  {plansForCoverage.length === 0 ? (
                    <div className="st2-desktop-no-plans-message">No hay planes disponibles</div>
                  ) : (
                    plansForCoverage.map((item, index) => {
                      const hasDiscount = hasDiscountForCoverage(item.company, coverage.value)
                      const discountPercentage = getDiscountPercentage(item.company, coverage.value)
                      const originalPrice =
                        item.company?.toLowerCase() === "san cristóbal" || item.company?.toLowerCase() === "integrity"
                          ? item.price / 12
                          : item.price

                      return (
                        <div key={`${item.company}-${index}`} className="st2-desktop-plan-card">
                          <div className="st2-desktop-plan-header">
                            <h4 className="st2-desktop-plan-title">{item.plan?.nombre || "Plan sin nombre"}</h4>
                            <img
                              src={item.logo || "/placeholder.svg"}
                              alt={item.company}
                              className="st2-desktop-plan-logo"
                            />
                          </div>

                          <div className="st2-desktop-plan-content">
                            <div className="st2-desktop-plan-features">
                              {COVERAGE_BY_TYPE[coverage.value].slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="st2-desktop-plan-feature">
                                  <span className="st2-desktop-feature-check">✓</span>
                                  <span className="st2-desktop-feature-text">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {hasDiscount && (
                              <div
                                style={{
                                  backgroundColor: "#33FFCC",
                                  color: "white",
                                  padding: "3px 6px",
                                  borderRadius: "4px",
                                  fontSize: "10px",
                                  fontWeight: "bold",
                                  marginTop: "8px",
                                  textAlign: "center",
                                  alignSelf: "flex-start",
                                  position: "absolute",
                                  bottom: "25px",
                                }}
                              >
                                {discountPercentage}% OFF
                              </div>
                            )}

                            <div className="st2-desktop-plan-pricing">
                              {hasDiscount && (
                                <div
                                  className="st2-desktop-plan-original-price"
                                  style={{ textDecoration: "line-through", color: "#999" }}
                                >
                                  {new Intl.NumberFormat("es-AR", {
                                    style: "currency",
                                    currency: "ARS",
                                    maximumFractionDigits: 0,
                                  }).format(originalPrice)}
                                </div>
                              )}
                              <div className="st2-desktop-plan-current-price">
                                {fmtARS(item.price, item.company, coverage.value)}
                              </div>
                            </div>
                          </div>

                          <button
                            className="st2-desktop-plan-select-btn"
                            onClick={() => openPhoneModal(item.company, item.plan, coverage.value)}
                          >
                            Seleccionar plan
                          </button>
                        </div>
                      )
                    })
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="st2-spectacular-mobile-companies-list st2-mobile-only">
        {mobileCompaniesByCompany.length === 0 ? (
          <div className="st2-spectacular-mobile-no-companies">
            <div className="st2-celestial-mobile-company-card">
              <div className="st2-divine-mobile-no-coverage-card">
                <div className="st2-mystical-mobile-no-coverage-text">
                  No hay planes disponibles para {getCoverageTypeLabel(mobileCoverageType)}
                </div>
              </div>
            </div>
          </div>
        ) : (
          mobileCompaniesByCompany.map((companyData) => {
            const currentIndex = companyCarouselStates[companyData.name] || 0
            const coverageFeatures = COVERAGE_BY_TYPE[mobileCoverageType] || []

            return (
              <div key={companyData.name} className="st2-extraordinary-mobile-company-section">
                {/*Logotipo de la empresa - Separado de la tarjeta*/}
                <div className="st2-majestic-mobile-company-logo-header">
                  <img
                    src={companyData.logo || "/placeholder.svg"}
                    alt={companyData.name}
                    className="st2-supreme-mobile-company-logo-large"
                  />
                </div>

                {/* Carrusel individual de la empresa */}
                <div className="st2-galactic-mobile-carousel-container">
                  <div
                    className="st2-stellar-mobile-carousel-track"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    {companyData.plans.map((planData) => {
                      const hasDiscount = hasDiscountForCoverage(companyData.name, mobileCoverageType)
                      const discountPercentage = getDiscountPercentage(companyData.name, mobileCoverageType)
                      const originalPrice =
                        companyData.name?.toLowerCase() === "san cristóbal" ||
                        companyData.name?.toLowerCase() === "integrity"
                          ? planData.plan.precio / 12
                          : planData.plan.precio

                      return (
                        <div key={planData.id} className="st2-extraordinary-mobile-company-slide">
                          <div className="st2-celestial-mobile-company-card">
                            <div className="st2-radiant-mobile-card-content">
                              <h3 className="st2-luminous-mobile-coverage-title">
                                {planData.plan?.nombre || "Plan sin nombre"}
                              </h3>

                              <div className="st2-brilliant-mobile-coverage-and-price">
                                <div className="st2-mystical-mobile-coverage-features">
                                  {coverageFeatures.slice(0, 3).map((feature, idx) => (
                                    <div key={idx} className="st2-mobile-coverage-item">
                                      <span className="st2-mobile-coverage-check">✓</span>
                                      <span className="st2-mobile-coverage-text">{feature}</span>
                                    </div>
                                  ))}
                                </div>

                                {hasDiscount && (
                                  <div
                                    style={{
                                      backgroundColor: "#33FFCC",
                                      color: "white",
                                      padding: "3px 6px",
                                      borderRadius: "4px",
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      marginTop: "8px",
                                      textAlign: "center",
                                      alignSelf: "flex-start",
                                      position: "absolute",
                                      top: "15px",
                                      right: "30px",
                                    }}
                                  >
                                    {discountPercentage}% OFF
                                  </div>
                                )}

                                <div className="st2-spectacular-mobile-price-and-button-section">
                                  <div className="st2-divine-mobile-price-section">
                                    <div
                                      className="st2-cosmic-mobile-price-original"
                                      style={{
                                        textDecoration: hasDiscount ? "line-through" : "none",
                                        color: hasDiscount ? "#999" : "inherit",
                                      }}
                                    >
                                      {hasDiscount
                                        ? new Intl.NumberFormat("es-AR", {
                                            style: "currency",
                                            currency: "ARS",
                                            maximumFractionDigits: 0,
                                          }).format(originalPrice)
                                        : ""}
                                    </div>
                                    <div className="st2-quantum-mobile-price-current">
                                      {fmtARS(planData.plan.precio, companyData.name, mobileCoverageType)}
                                    </div>
                                  </div>
                                  <button
                                    className="st2-magnificent-mobile-select-plan-btn"
                                    onClick={() => openPhoneModal(companyData.name, planData.plan, mobileCoverageType)}
                                  >
                                    Seleccionar plan
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Puntos de navegación individuales para esta empresa */}
                <div className="st2-supreme-mobile-carousel-navigation">
                  <div className="st2-celestial-carousel-dots">
                    {companyData.plans.map((_, index) => (
                      <button
                        key={index}
                        className={`st2-luminous-carousel-dot ${index === currentIndex ? "st2-active" : ""}`}
                        onClick={() => goToCompanyCard(companyData.name, index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Flechas de navegación individuales para esta empresa */}
                {companyData.plans.length > 1 && (
                  <div className="st2-majestic-mobile-carousel-arrows">
                    <button
                      className="st2-ethereal-carousel-arrow st2-radiant-carousel-arrow-prev"
                      onClick={() => prevCompanyCard(companyData.name, companyData.plans.length)}
                    >
                      ‹
                    </button>
                    <button
                      className="st2-ethereal-carousel-arrow st2-brilliant-carousel-arrow-next"
                      onClick={() => nextCompanyCard(companyData.name, companyData.plans.length)}
                    >
                      ›
                    </button>
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>

      <div className="st2-extraordinary-button-container-deluxe">
        <button onClick={handleVolverACotizar} className="st2-magnificent-btn-volver">
          Volver a cotizar
        </button>
      </div>

      <PhoneModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmitPhone}
        submitting={leadSubmitting}
        error={leadError}
        title="Enviar cotización al teléfono"
        waNumber="541156307246"
        waMessage={
          selected
            ? `Hola! Consulta por cotización.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nVehículo: ${marcaTxt} ${modeloTxt} ${formData.anio}${versionTxt ? " " + versionTxt : ""}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nAseguradora: ${selected.insurer || "No especificada"}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nPlan: ${selected.plan?.nombre || "Plan no especificado"}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nPrecio: ${fmtARS(selected.plan?.precio || 0, selected.insurer, selected.coverageType)}/mes`
            : "Hola! Me interesa una cotización."
        }
        selectedPlan={selected?.plan}
        insurerName={selected?.insurer}
        vehicleInfo={{
          marca: marcaTxt,
          modelo: modeloTxt,
          version: versionTxt,
          anio: formData.anio,
        }}
        insurerLogo={selected?.insurer ? LOGOS[selected.insurer.toLowerCase()] : undefined}
      />
    </div>
  )
}
