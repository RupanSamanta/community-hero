import HeroSection from "./Hero"
import { Link } from "react-router-dom"
import IssueCard from "../issues/IssueCard"
import { getIssues } from "@/lib/storage.js"
import { Button } from "../ui/button"
import { ArrowRightIcon } from "lucide-react"

function Home() {
  const allIssues = getIssues();
  return (
    <>
      <HeroSection />
      {allIssues.length && <div className="mt-20 pb-12">
        <div className="flex justify-between">
          <span className="text-2xl font-medium">Recent reports</span>
          <Link to="/issues">
            <Button variant="ghost" className="flex items-center gap-2 text-sm text-emerald-600">
              View all <ArrowRightIcon />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {allIssues.slice(0, 3).map((issue, index) => (
            <IssueCard key={index} issue={issue} hideVerifyButton={true} />
          ))}
        </div>
      </div>
      }
    </>
  )
}

export default Home