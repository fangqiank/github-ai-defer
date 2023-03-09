import { NextRequest, NextResponse } from "next/server";
// import {getGithubInfo, generateGithubProfile} from '@/defer/generateGitHubProfile'
import generateGithubProfile from '@/defer/generateGitHubProfile'
import {getExecution} from '@defer/client'

export async function POST(
  _request: NextRequest,
  { params }: { params: { usernameOrExecId: string } }
) {
  const res = await generateGithubProfile(params.usernameOrExecId)
  return NextResponse.json(res)
}

export async function GET(
  _request: Request,
  { params }: { params: { usernameOrExecId: string } }
) {
  const res = await getExecution(params.usernameOrExecId)
  return NextResponse.json(res)
}
