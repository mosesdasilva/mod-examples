import { DependencyContainer } from "tsyringe";

import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { MoreCode } from "./MoreCode";

class Mod implements IPostSptLoadMod
{
    public postDBLoad(container: DependencyContainer): void 
    {
     const logger = container.resolve<ILogger>("WinstonLogger");
     
     const moreCode = new MoreCode();

     const result = moreCode.getTheWordFlub();

     logger.info (`Here is the value form my sesond class: ${result}`);
    }
}

export const mod = new Mod();