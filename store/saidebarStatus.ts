import {useState} from "react"

export const saidebarStatus = () => {

  const [visible, setVisible] = useState(false)

  function Hide() {
    setVisible(false)
  }

  function Show() {
    setVisible(true)
  }

  return {visible, Hide, Show}

}