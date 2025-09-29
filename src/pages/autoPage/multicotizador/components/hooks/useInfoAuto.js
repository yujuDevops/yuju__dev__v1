import { useState, useEffect } from "react"

export default function useInfoAuto() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("https://api.infoauto.com.ar/cars/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            usuario: "valentin.schutt@nimbusseguros.com",
            password: "Cl9iXaYwU5It2EhT",
          }),
        })

        const data = await response.json()
        localStorage.setItem("infoautoToken", data.token)
        setToken(data.token)
      } catch (err) {
        console.error("Error autenticando InfoAuto:", err)
      }
    }

    fetchToken()
  }, [])

  return token
}
