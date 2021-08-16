import Canary from "../../components/Canary"

export default function CanaryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Canary url="http://localhost:8080/api" />
      </div>
    </div>
  )
}
