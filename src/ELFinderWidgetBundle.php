<?php

namespace App\CaptJM\ELFinderWidgetBundle\src;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class ELFinderWidgetBundle extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}