import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { ElementType, useEffect } from 'react'

export default function withAuth(WrappedComponent: ElementType) {
  const Wrapper = (props: any) => {
    const route = useRouter()

    useEffect(() => {
      const token = Cookies.get('token')

      if (!token) {
        route.push('/')
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  return Wrapper
}
