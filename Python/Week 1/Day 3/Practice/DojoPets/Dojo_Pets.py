from ninja import Ninja
from pet import Pet

covida=Pet('covida','cat','jumping')

ninja1=Ninja("ach","ach","smart","croquette",covida)

ninja1.feed().walk().bathe()


