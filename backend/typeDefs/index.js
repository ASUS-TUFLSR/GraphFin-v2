import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDef from "./userTypeDef.js";
import transactionTypeDef from "./transactionTypeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;

// By merging both type defs


// Modularity: Merging type definitions allows you to keep related schema components in separate files,
//  promoting modularity and organization.

// Easier Collaboration: If multiple developers are working on different parts of the schema, 
// merging separate type definitions can make it easier to collaborate without conflicts.

// Reuse: You can reuse type definitions across different parts of the schema, potentially reducing duplication.

// Clear Separation of Concerns: Each file can focus on a specific domain or type of data,
//  making it easier to understand and maintain.