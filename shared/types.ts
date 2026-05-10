/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ErrorAnalysis {
  id: string;
  originalError: string;
  language: string;
  simpleExplanation: string;
  solution: string;
  difficulty: "Easy" | "Medium" | "Hard";
  createdAt: number;
}

export interface User {
  id: string;
  username: string;
  level: number;
  exp: number;
}
